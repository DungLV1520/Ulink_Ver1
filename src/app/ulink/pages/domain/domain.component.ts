import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, finalize, of, switchMap } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { ToastrService } from 'ngx-toastr';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { GlobalComponent } from 'src/app/app.constant';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
})
export class DomainComponent {
  myDomainForm!: FormGroup;
  routes = routes;
  Toggledata = false;
  Toggle = false;
  domainAll: any[] = [];
  loading = false;
  loadingDomain = false;
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
    const domain = this.myDomainForm.get('domain')!.value.trim().toLowerCase();
    const user = JSON.parse(
      localStorage.getItem(GlobalComponent.CUSTOMER_KEY)!
    );

    const objMyDomain = {
      ...this.myDomainForm.value,
      domain,
      isSubDomain: false,
    };

    const handleError = () => {
      this.toastr.error(
        `No permission. Add domain [${domain}] failed. Please contact us`
      );
    };

    const handleResponse = (res: any) => {
      if (res !== null) {
        if (res === 'OK') {
          this.toastr.success(`Add domain [${domain}] success`);
          this.getAllMyDomain();
        } else {
          handleError();
        }
      }
    };

    if (user.id === 2799) {
      this.uLinkService
        .createMyDomainCustomForUserId2799(objMyDomain)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe({
          next: handleResponse,
          error: handleError,
        });
    } else if (user.id === 2526) {
      this.uLinkService
        .createMyDomainCustomForUserId2526(objMyDomain)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe({
          next: handleResponse,
          error: handleError,
        });
    } else {
      const apiCall = (observable: Observable<any>) => {
        return observable.pipe(
          switchMap((res: any) => {
            if (!res.isPointing) {
              this.toastr.error(
                `Domain [${domain}] does not point to IP: ${res.serverIp}`
              );
              return of(null);
            }
            return this.uLinkService.createMyDomain(objMyDomain);
          }),
          finalize(() => {
            this.loading = false;
          })
        );
      };

      apiCall(this.uLinkService.checkDNSDomain(domain)).subscribe({
        next: handleResponse,
        error: handleError,
      });
    }
  }

  getAllMyDomain(): void {
    this.loadingDomain = true;
    this.uLinkService
      .getAllMyDomain()
      .pipe(
        finalize(() => {
          this.loadingDomain = false;
        })
      )
      .subscribe({
        next: (res: any) => {
          this.domainAll = res;
        },
      });
  }
}
