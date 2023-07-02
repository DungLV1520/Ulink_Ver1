import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import {CreateLinkComponent} from "./create-link/create-link.component";

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'my-listing',
        loadChildren: () =>
          import('./my-link/my-link.module').then(
            (m) => m.MyLinkModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'create-link',
        component: CreateLinkComponent,
      },
      {
        path: 'domain',
        loadChildren: () =>
          import('./domain/domain.module').then((m) => m.DomainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
