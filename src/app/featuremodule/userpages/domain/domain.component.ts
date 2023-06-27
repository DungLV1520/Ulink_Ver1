import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import {ToastrService} from "ngx-toastr";

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
    private toast: HotToastService,
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
    const domain = this.myDomainForm.get('domain')!.value;
    this.uLinkService.checkDNSDomain(domain)
      .pipe(
        catchError(() => {
          return of(null);
        }),
        switchMap((res: any) => {
          if (!res.isPointing) {
            this.toastr.error(`Domain [${domain}] does not point to IP: ${res.serverIp}`);
            return of(null);
          }

          const objMyDomain = {
            ...this.myDomainForm.value,
            isSubDomain: false,
          };
          return this.uLinkService.createMyDomain(objMyDomain);
        })
      ).subscribe({
        next: (res) => {
          if (res !== null) {
            if ("OK" === res) {
              this.toastr.success(`Add domain [${domain}] success`);
              this.getAllMyDomain();
            } else {
              this.toastr.error(`No permission. Add domain [${domain}] failed.
              Please contact us`);
            }
          }
        },
        error: (err) => {
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
    });
  }
}
