import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    DomainComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DomainRoutingModule,
    NgxLoadingModule.forRoot({}),
  ]
})

export class DomainModule { }
