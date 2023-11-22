import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class LoginModule {}
