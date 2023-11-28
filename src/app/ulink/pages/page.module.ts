import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateLinkComponent } from './create-link/create-link.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [PageComponent, CreateLinkComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    NgApexchartsModule,
    SharedModule,
    FlatpickrModule.forRoot(),
  ],
})
export class PageModule {}
