import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from 'src/app/shared/shared.module';
import {CreateLinkComponent} from "./create-link/create-link.component";


@NgModule({
  declarations: [
    UserPageComponent,
    CreateLinkComponent,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    NgApexchartsModule,
    SharedModule,
    FlatpickrModule.forRoot()
  ]
})
export class UserPageModule { }
