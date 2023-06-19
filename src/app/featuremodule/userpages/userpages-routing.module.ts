import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpagesComponent } from './userpages.component';

const routes: Routes = [
  {
    path: '',
    component: UserpagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'my-listing',
        loadChildren: () =>
          import('./my-listing/my-listing.module').then(
            (m) => m.MyListingModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpagesRoutingModule {}
