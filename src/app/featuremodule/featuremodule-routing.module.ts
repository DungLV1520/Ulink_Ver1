import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturemoduleComponent } from './featuremodule.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturemoduleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: '',
        component:HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'userpages',
        loadChildren: () =>
          import('./userpages/userpages.module').then((m) => m.UserpagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturemoduleRoutingModule {}
