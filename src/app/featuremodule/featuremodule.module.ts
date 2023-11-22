import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturemoduleRoutingModule } from './featuremodule-routing.module';
import { FeaturemoduleComponent } from './featuremodule.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [FeaturemoduleComponent, HomeComponent],
  imports: [
    CommonModule,
    FeaturemoduleRoutingModule,
    SharedModule,
    FlatpickrModule.forRoot(),
  ],
})
export class FeaturemoduleModule {}
