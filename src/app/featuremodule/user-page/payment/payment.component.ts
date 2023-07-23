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
  domainAll: any[] = [];
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
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myPaymentForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      money: ['', [Validators.required, Validators.email]],
      totalClick: ['', [Validators.required, Validators.email]],
    });

    this.getAllMyDomain();
  }

  calTotalClick(): void {
    console.log(this.myPaymentForm.value);
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

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  icon() {
    this.Toggle = !this.Toggle;
  }

  registerDomain(): void {
    this.loading = true;
    const domain = this.myPaymentForm.get('domain')!.value;
    this.uLinkService
      .checkDNSDomain(domain)
      .pipe(
        catchError(() => {
          return of(null);
        }),
        switchMap((res: any) => {
          if (!res.isPointing) {
            this.toastr.error(
              `Domain [${domain}] does not point to IP: ${res.serverIp}`
            );
            return of(null);
          }

          const objMyDomain = {
            ...this.myPaymentForm.value,
            isSubDomain: false,
          };
          return this.uLinkService.createMyDomain(objMyDomain);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          if (res !== null) {
            if ('OK' === res) {
              this.toastr.success(`Add domain [${domain}] success`);
              this.getAllMyDomain();
            } else {
              this.toastr.error(`No permission. Add domain [${domain}] failed.
              Please contact us`);
            }
          }
        },
        error: () => {
          this.toastr.error(`No permission. Add domain [${domain}] failed.
            Please contact us`);
        },
      });
  }

  getAllMyDomain(): void {
    this.uLinkService.getAllMyDomain().subscribe({
      next: (res: any) => {
        this.domainAll = res;
      },
      error: () => {},
    });
  }
}
