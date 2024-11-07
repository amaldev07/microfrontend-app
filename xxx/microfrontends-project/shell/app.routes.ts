
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('profile/ProfileComponent').then(m => m.ProfileComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('dashboard/DashboardComponent').then(m => m.DashboardComponent)
  },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];
