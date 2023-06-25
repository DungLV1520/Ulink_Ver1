import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyListingRoutingModule } from './my-listing-routing.module';
import { MyListingComponent } from './my-listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MyListingComponent
  ],
  imports: [
    CommonModule,
    MyListingRoutingModule,
    NgbPaginationModule,
    SharedModule
  ]
})
export class MyListingModule { }
