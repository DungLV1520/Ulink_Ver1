import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  myPaymentForm!: FormGroup;
  routes = routes;
  Toggledata = false;
  Toggle = false;
  packagesData: any[] = [];
  loading = false;
  loadingRegister = false;
  loadingTemplate!: TemplateRef<any>;
  totalClick = 0;
  config = {
    animationType: ngxLoadingAnimationTypes.none,
    backdropBorderRadius: '3px',
  };
  intervalId: any;
  inforMoneyPayment: any;
  packages: any;
  packageValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private uLinkService: ULinkService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.myPaymentForm = this.formBuilder.group({
      payment: ['', [Validators.required]],
    });

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.getTotalMoney();
      this.getPackagePackageData();
    }, 3000);

    this.getTotalMoney();
    this.getPackageRegister();
    this.getPackagePackageData();

    this.myPaymentForm.get('payment')!.valueChanges.subscribe((value) => {
      this.packageValue = value;
    });
  }

  getTotalMoney(): void {
    this.uLinkService.getTotalMoney().subscribe((money) => {
      this.inforMoneyPayment = money;
    });
  }

  getPackageRegister(): void {
    this.uLinkService
      .getPackageRegister()

      .subscribe((packages) => {
        this.packages = packages;
      });
  }

  getPackagePackageData(): void {
    this.loadingRegister = true;
    this.uLinkService
      .getPackagePackageData()
      .pipe(
        finalize(() => {
          this.loadingRegister = false;
        })
      )
      .subscribe((data: any) => {
        this.packagesData = data;
      });
  }

  registerPackage(): void {
    const objPackage = {
      id: this.packageValue.id,
      date: this.packageValue.date,
    };
    this.uLinkService
      .registerPackage(objPackage)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (res: any) => {
          if (res.status === 400) {
            this.toast.error(res.message);
            return;
          }
          this.toast.success('Mua gói thành công');
        },
        (err) => {
          this.toast.error(err);
        }
      );
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  calTotalClick(): void {
    const money = this.myPaymentForm.get('money')!.value as number;
    if (money) {
      this.myPaymentForm.patchValue({
        totalClick: Math.ceil(money / 5),
      });
    } else {
      this.myPaymentForm.patchValue({
        totalClick: 0,
      });
    }
  }

  payment(): void {
    this.loading = true;
    const objPayment = {
      phonePartner: this.myPaymentForm.get('phone')!.value,
    };
    this.uLinkService
      .createPayment(objPayment)
      .pipe(
        catchError(() => {
          return of(null);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res: any) => {
          // if (res !== null) {
          //   if ('OK' === res) {
          //     this.toastr.success(`Add domain [${domain}] success`);
          //     this.getAllMyPayment();
          //   } else {
          //     this.toastr.error(`No permission. Add domain [${domain}] failed.
          //     Please contact us`);
          //   }
          // }
        },
        error: () => {
          // this.toastr.error(`No permission. Add domain [${domain}] failed.
          //   Please contact us`);
        },
      });
  }
}
