import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DomainComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DomainRoutingModule
  ]
})

export class DomainModule { }
