import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpagesRoutingModule } from './userpages-routing.module';
import { UserpagesComponent } from './userpages.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    UserpagesComponent
  ],
  imports: [
    CommonModule,
    UserpagesRoutingModule,
    NgApexchartsModule,
  ]
})
export class UserpagesModule { }
