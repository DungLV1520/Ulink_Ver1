import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLinkComponent } from './my-link.component';
import {StreamingClickComponent} from "../streaming-click/streaming-click.component";

const routes: Routes = [{ path: '', component: MyLinkComponent }, { path: 'streaming-click', component: StreamingClickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinkRoutingModule { }
