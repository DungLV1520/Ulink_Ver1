import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import * as AOS from 'aos';
import { CountUp } from 'countup.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
  domainSelecteds: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService,
    public router: Router,
    private clipboard: Clipboard,
    private ulinkService: ULinkService,
    private toast: HotToastService,
    private authService: AuthService
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
    AOS.init({ disable: 'mobile' });
    this.formFake = this.formBuilder.group({
      originalLink: ['', [Validators.required, Validators.maxLength(1000)]],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
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

    this.formShort.patchValue({
      domain: this.getRandomElementFromArray(),
    });

    const currentUser = this.authService.currentManagerValue;

    if (currentUser && currentUser.token) {
      this.router.navigate(['/user-page/my-listing']);
    }
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

  registerLink() {
    this.router.navigate(['/auth/login']);
  }

  registerLinkShort() {
    this.router.navigate(['/auth/login']);
  }

  resetForm(): void {
    this.submitted = false;
    this.formFake.reset();
    this.formFake.patchValue({
      domain: this.getRandomElementFromArray(),
      displayType: 'video.other',
    });
  }

  resetFormShort(): void {
    this.submittedShort = false;
    this.formShort.reset();
    this.formShort.patchValue({
      domain: this.getRandomElementFromArray(),
    });
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
      domain: this.getRandomElementFromArray(),
      displayType: 'video.other',
    });

    this.formShort.patchValue({
      domain: this.getRandomElementFromArray(),
    });
  }

  getAllDomainRegister(): void {
    this.ulinkService.getAllDomainRegister().subscribe((res) => {
      this.domainSelecteds = res;
    });
  }
}
