import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpagesRoutingModule } from './userpages-routing.module';
import { UserpagesComponent } from './userpages.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CreatLinkComponent } from './creat-link/creat-link.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserpagesComponent,
    CreatLinkComponent,
  ],
  imports: [
    CommonModule,
    UserpagesRoutingModule,
    NgApexchartsModule,
    SharedModule,
    FlatpickrModule.forRoot()
  ]
})
export class UserpagesModule { }
