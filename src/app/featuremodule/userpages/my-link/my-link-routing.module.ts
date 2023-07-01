import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLinkComponent } from './my-link.component';

const routes: Routes = [{ path: '', component: MyLinkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinkRoutingModule { }
