import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DateFormatPipe } from './date.pipe';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [DashboardComponent, DateFormatPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FlatpickrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
  ],
})
export class DashboardModule {}
