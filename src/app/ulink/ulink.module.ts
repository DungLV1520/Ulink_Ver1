import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlinkRoutingModule } from './ulink-routing.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { UlinkComponent } from './ulink.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UlinkComponent, HomeComponent],
  imports: [
    CommonModule,
    UlinkRoutingModule,
    SharedModule,
    FlatpickrModule.forRoot(),
  ],
})
export class UlinkModule {}
