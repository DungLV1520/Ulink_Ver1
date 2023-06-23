import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { ULinkService } from 'src/app/shared/service/ulink.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private uLinkService: ULinkService,
    private toast: HotToastService
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
    const toastRef = this.toast.loading('Loading...', {
      duration: 5000,
      position: 'top-center',
    });

    const domain = this.myDomainForm.get('domain')!.value;
    this.uLinkService
      .checkDNSDomain(domain)
      .pipe(
        catchError(() => {
          return of(null);
        }),
        switchMap((res: any) => {
          console.log(res);

          if (!res.isPointing) {
            this.toast.error(
              `Domain ${domain} chưa trỏ tới ip: ${res.serverIp}`,
              {
                duration: 7000,
                position: 'top-center',
              }
            );
            return of(null);
          }

          const objMyDomain = {
            ...this.myDomainForm.value,
            isSubDomain: false,
          };

          return this.uLinkService.createMyDomain(objMyDomain);
        }),
        finalize(() => toastRef.close())
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          // Xử lý lỗi khi tạo domain
        },
      });
  }

  getAllMyDomain(): void {
    this.uLinkService.getAllMyDomain().subscribe({
      next: (res: any) => {
        console.log(res);
        this.domainAll = res;
      },
    });
  }
}
