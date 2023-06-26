import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLinkRoutingModule } from './my-link-routing.module';
import { MyLinkComponent } from './my-link.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MyLinkComponent
  ],
  imports: [
    CommonModule,
    MyLinkRoutingModule,
    NgbPaginationModule,
    SharedModule
  ]
})
export class MyLinkModule { }
