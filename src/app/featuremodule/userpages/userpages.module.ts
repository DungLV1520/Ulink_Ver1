import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpagesRoutingModule } from './userpages-routing.module';
import { UserpagesComponent } from './userpages.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from 'src/app/shared/shared.module';
import {CreateLinkComponent} from "./create-link/create-link.component";


@NgModule({
  declarations: [
    UserpagesComponent,
    CreateLinkComponent,
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
