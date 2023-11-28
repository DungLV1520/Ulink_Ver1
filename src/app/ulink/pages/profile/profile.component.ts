import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Clipboard } from '@angular/cdk/clipboard';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AuthService } from 'src/app/core/services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  loadingTemplate!: TemplateRef<any>;
  routes = routes;
  Toggledata = false;
  ToggledataPassword = false;
  Toggle = false;
  submitted = false;
  isPassword = true;
  profile: any;
  isCopy = false;
  isCopyLink = false;
  loading = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toast: HotToastService,
    private clipboard: Clipboard
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
    this.loading = true;
    this.authService
      .getProfile()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (profile) => {
          this.profile = profile;
          this.profileForm.setValue({
            fullName: profile.fullName || '',
            phone: profile.phone || '',
            email: profile.email || '',
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
      (body) => {
        if (body.updateSuccess) {
          this.toast.success('Update profile successfully');
        } else {
          this.toast.error('Update profile failed');
        }
      },
      (err) => {
        this.toast.error(err);
      }
    );
  }

  updatePassword(): void {
    this.passwordForm.value['id'] = this.profile.id;
    this.authService.updateProfile(this.passwordForm.value).subscribe(
      () => {
        this.toast.success('Update password successfully');
      },
      (err) => {
        this.toast.error(err);
      }
    );
  }

  copyReferralCode(): void {
    this.isCopy = true;
    this.clipboard.copy(this.profile?.myReferral);
  }

  copyReferralLink(): void {
    this.isCopyLink = true;
    this.clipboard.copy(
      `https://u-link.asia/auth/signup?code=${this.profile?.myReferral}`
    );
  }
}
