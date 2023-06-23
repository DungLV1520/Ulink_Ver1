import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DateFormatPipe } from './date.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FlatpickrModule.forRoot()
  ]
})
export class DashboardModule { }
