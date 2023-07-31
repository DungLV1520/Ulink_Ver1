import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data.service';
import * as AOS from 'aos';
import { CountUp } from 'countup.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, finalize, from, of, switchMap, tap } from 'rxjs';
import { RegisterDomain } from 'src/app/shared/model/register.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creat-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css'],
})
export class CreateLinkComponent {
  formFake!: FormGroup;
  formShort!: FormGroup;
  routes = routes;
  fileToUpload: File | null = null;
  pricing: any = [];
  jobholder: any = [];
  countUp: CountUp | any;
  universitiesCompanies: any = [];
  urlULink = '';
  submitted = false;
  submittedShort = false;
  isShow = true;
  profileData: any;
  domainSelecteds: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService,
    public router: Router,
    private clipboard: Clipboard,
    private ulinkService: ULinkService,
    private toast: HotToastService,
    private authService: AuthService,
    private modalService: NgbModal
  ) {
    (this.jobholder = this.DataService.jobholder),
      (this.universitiesCompanies = this.DataService.universitiesCompanies),
      (this.pricing = this.DataService.pricingList);
  }

  public jobholderOwlOptions: OwlOptions = {
    margin: 24,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 5,
        loop: true,
      },
    },
    nav: true,
  };

  public universitiesCompaniesOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    autoplay: true,
    smartSpeed: 2000,

    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 2,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };

  ngOnInit(): void {
    this.getAllDomainRegister();
    this.getProfile();
    AOS.init({ disable: 'mobile' });
    this.formFake = this.formBuilder.group({
      originalLink: ['', [Validators.required, Validators.maxLength(1000)]],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      aliasRegister: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      file: ['', [Validators.required]],
      displayType: ['', [Validators.required]],
      domain: ['', [Validators.required]],
      urlULink: [''],
    });

    this.formShort = this.formBuilder.group({
      originalLink: ['', [Validators.required, Validators.maxLength(1000)]],
      aliasRegister: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      domain: ['', [Validators.required]],
      urlULink: [''],
    });
  }

  getProfile(): void {
    this.authService.getProfile().subscribe((profile) => {
      this.profileData = profile;
    });
  }

  get fFake() {
    return this.formFake.controls;
  }

  get fShort() {
    return this.formShort.controls;
  }

  getRandomElementFromArray(): string {
    const arr = [
      'https://ulink.asia',
      'https://ulink.store',
      'https://uhide.click',
      'https://ulink.wiki',
    ];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  ngAfterViewInit() {
    this.countUp = new CountUp('my-count-up', 0);
    this.countUp.start();
  }

  registerLink(content: any) {
    this.submitted = true;
    if (!this.fileToUpload || !this.formFake.valid) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    const toastRef = this.toast.loading('Loading...', {
      duration: 20000000,
      position: 'top-center',
    });

    from(this.ulinkService.uploadImage(formData))
      .pipe(
        switchMap((res) => {
          let register = new RegisterDomain();
          register.user_id = this.profileData?.id;
          register.type = 'FACEBOOK';
          register.source_page = this.formFake.get('domain')!.value;
          register.url_original = this.formFake.get('originalLink')!.value;
          register.content.alias_register =
            this.formFake.get('aliasRegister')!.value || '';
          register.content.url_normal_user =
            this.formFake.get('originalLink')!.value;
          register.content.url_manager_fb_user = 'https://www.youtube.com';
          register.content.title = this.formFake.get('title')!.value;
          register.content.type = this.formFake.get('displayType')!.value;
          register.content.description =
            this.formFake.get('description')!.value;
          register.content.thumbnail = res.data;

          return this.ulinkService.registerDomain(register);
        }),
        tap((res: any) => {
          if (res.code == 400) {
            if (res.message === 'Invalid quota. Upgrade account to continue!') {
              this.toast.error('Invalid quota. Upgrade account to continue!');
              return;
            }
            this.toast.error(
              'Alias(back-half) already exists. </br>' + 'Please try again.'
            );
            return;
          } else {
            this.urlULink = res?.data?.url_ulink;
            this.clipboard.copy(this.urlULink);
            this.toast.success(
              'Register url success. </br>Copy ' +
                this.urlULink +
                ' into clipboard.'
            );
            setTimeout(() => {
              this.formFake.patchValue({
                urlULink: res?.data?.url_ulink,
              });
            }, 0);
            this.resetForm();
          }
        }),
        catchError((error) => {
          this.toast.error(error);
          this.submitted = false;
          return of(null);
        }),
        finalize(() => toastRef.close())
      )
      .subscribe();
  }

  registerLinkShort() {
    this.submittedShort = true;
    if (this.formShort.invalid) {
      return;
    }

    const toastRef = this.toast.loading('Loading...', {
      duration: 20000,
      position: 'top-center',
    });

    let register = new RegisterDomain();
    register.type = 'FACEBOOK';
    register.user_id = this.profileData?.id;
    register.source_page = this.formShort.get('domain')!.value;
    register.url_original = this.formShort.get('originalLink')!.value;
    register.content.alias_register =
      this.formShort.get('aliasRegister')!.value || '';
    register.content.url_normal_user =
      this.formShort.get('originalLink')!.value;
    register.content.url_manager_fb_user = '';
    register.content.title = '';
    register.content.type = '';
    register.content.description = '';
    register.content.thumbnail = '';

    this.ulinkService
      .registerDomain(register)
      .pipe(finalize(() => toastRef.close()))
      .subscribe({
        next: (res: any) => {
          if (res.code == 400) {
            this.toast.error(
              'Alias(back-half) already exists. </br>' + 'Please try again.'
            );
            return;
          }

          this.urlULink = res?.data?.url_ulink;
          setTimeout(() => {
            this.formShort.patchValue({
              urlULink: res?.data?.url_ulink,
            });
          }, 0);

          this.clipboard.copy(this.urlULink);
          this.resetFormShort();
          this.toast.success(
            `Register url success.</br> Copy ${res?.data?.url_ulink} into clipboard.`
          );
        },
        error: (error) => {
          this.toast.error(error);
          this.submittedShort = false;
        },
      });
  }

  resetForm(): void {
    this.submitted = false;
    this.formFake.reset();
    this.formFake.patchValue({
      displayType: 'video.other',
    });
  }

  resetFormShort(): void {
    this.submittedShort = false;
    this.formShort.reset();
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  copyToClipboard() {
    if (this.urlULink) {
      this.clipboard.copy(this.urlULink);
      this.toast.success('Copy URL Success! ' + this.urlULink);
    } else {
      this.toast.error('No url exist, please create your link');
    }
  }

  checkShow(check: boolean): void {
    this.isShow = check;
    this.formFake.patchValue({
      displayType: 'video.other',
    });
  }

  getAllDomainRegister(): void {
    this.ulinkService.getAllDomainRegister().subscribe((res) => {
      this.domainSelecteds = res;
    });
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  goToPayment(): void {
    this.router.navigate(['user-page/payment']);
    this.modalService.dismissAll();
  }
}
