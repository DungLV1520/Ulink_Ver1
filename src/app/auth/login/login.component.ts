import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { finalize, first } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  public routes = routes;
  public Toggledata = true;
  submitted = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private toast: HotToastService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  path() {
    this.router.navigate([routes.dashboard]);
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const toastRef = this.toast.loading('Loading...', {
      duration: 5000,
      position: 'top-center',
    });

    this.authService
      .login(this.f['username'].value, this.f['password'].value)
      .pipe(finalize(() => toastRef.close()))
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
          this.toast.success('Login successfully', {
            duration: 3000,
            position: 'top-center',
          });
        },
        error: (error) => {
          this.toast.error(error, {
            duration: 3000,
            position: 'top-center',
          });
        },
      });
  }
}
