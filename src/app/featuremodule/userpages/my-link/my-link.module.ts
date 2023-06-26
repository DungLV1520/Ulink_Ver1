import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLinkRoutingModule } from './my-link-routing.module';
import { MyLinkComponent } from './my-link.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { StreamingClickComponent } from "../streaming-click/streaming-click.component";


@NgModule({
  declarations: [
    MyLinkComponent, StreamingClickComponent
  ],
  imports: [
    CommonModule,
    MyLinkRoutingModule,
    NgbPaginationModule,
    SharedModule,
    FlatpickrModule.forRoot()
  ]
})
export class MyLinkModule { }
