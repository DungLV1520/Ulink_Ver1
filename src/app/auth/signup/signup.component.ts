import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { finalize } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  public routes = routes;
  public Toggledata = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  path() {
    this.router.navigate([routes.login]);
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    const toastRef = this.toast.loading('Loading...', {
      duration: 5000,
      position: 'top-center',
    });

    this.signupForm.value['lang'] = 'vi';
    this.authService
      .register(this.signupForm.value)
      .pipe(finalize(() => toastRef.close()))
      .subscribe({
        next: () => {
          this.router.navigate(['/auth/login']);
          this.toast.success('Register successful !!!', {
            duration: 3000,
            position: 'top-center',
          });
        },
        error: (error: any) => {
          this.toast.error(error, {
            duration: 3000,
            position: 'top-center',
          });
        },
      });
  }
}
