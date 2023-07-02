import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  public routes = routes;
  public Toggledata = false;
  public ToggledataPassword = false;
  public Toggle = false;
  submitted = false;
  isPassword = true;
  profile: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      fullName: [''],
      phone: [''],
      email: ['', [Validators.email]],
    });

    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });

    this.getProfile();
  }

  get fProfile() {
    return this.profileForm.controls;
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  iconLoglePassword() {
    this.ToggledataPassword = !this.ToggledataPassword;
  }

  icon() {
    this.Toggle = !this.Toggle;
  }

  getProfile(): void {
    this.authService.getProfile().subscribe(
      (profile) => {
        this.profile = profile;
        this.profileForm.patchValue({
          fullName: profile.fullName,
          phone: profile.phone,
          email: profile.email,
        });
      },
      (err) => {
        this.toast.error(err);
      }
    );
  }

  updateProfile(): void {
    this.submitted = true;
    this.profileForm.value['id'] = this.profile.id;
    this.authService.updateProfile(this.profileForm.value).subscribe(
      () => {
        this.toast.success('Update profile successfully');
      },
      (err) => {
        this.toast.error(err);
      }
    );
  }

  updatePassword(): void {
    this.passwordForm.value['id'] = this.profile.id;
    this.authService.updateProfile(this.passwordForm.value).subscribe(
      (data) => {
        console.log(data);
        this.toast.success('Update password successfully');
      },
      (err) => {
        this.toast.error(err);
      }
    );
  }
}
