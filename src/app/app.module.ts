import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { ToastrModule } from 'ngx-toastr';
import { FlatpickrModule } from 'angularx-flatpickr';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import {
  NgbAlertModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
    }),
    NgbPaginationModule,
    NgbAlertModule,
    BsDatepickerModule.forRoot(),
    HotToastModule.forRoot(),
    FlatpickrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
