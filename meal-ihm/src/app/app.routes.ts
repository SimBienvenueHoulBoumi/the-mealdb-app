import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: SigninComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'catalogue',
        pathMatch: 'full',
      },
      {
        path: 'catalogue',
        component: CatalogueComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];
