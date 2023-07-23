import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { ToastrService } from 'ngx-toastr';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  myPaymentForm!: FormGroup;
  public routes = routes;
  public Toggledata = false;
  public Toggle = false;
  paymentAll: any[] = [];
  loading = false;
  public loadingTemplate!: TemplateRef<any>;
  totalClick = 0;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    backdropBorderRadius: '3px',
  };

  constructor(
    private formBuilder: FormBuilder,
    private uLinkService: ULinkService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.myPaymentForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      money: ['', [Validators.required]],
      totalClick: [''],
    });

    this.getAllMyPayment();
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
      phonePartner: this.myPaymentForm.get('phone')!.value
    }
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
        next: (res:any) => {
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

  getAllMyPayment(): void {
    this.uLinkService.getAllMyPayment().subscribe({
      next: (res: any) => {
        this.paymentAll = res;
      },
      error: () => {},
    });
  }
}
