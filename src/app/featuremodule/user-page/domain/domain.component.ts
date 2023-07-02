import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { ToastrService } from 'ngx-toastr';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
})
export class DomainComponent {
  myDomainForm!: FormGroup;
  public routes = routes;
  public Toggledata = false;
  public Toggle = false;
  domainAll: any[] = [];
  loading = false;
  public loadingTemplate!: TemplateRef<any>;
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
    this.myDomainForm = this.formBuilder.group({
      domain: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.getAllMyDomain();
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }
  icon() {
    this.Toggle = !this.Toggle;
  }

  registerDomain(): void {
    this.loading = true;
    const domain = this.myDomainForm.get('domain')!.value;
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
            ...this.myDomainForm.value,
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
      error:()=>{

      }
    });
  }
}
