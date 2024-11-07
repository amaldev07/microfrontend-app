import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', loadComponent: () => import('profile/ProfileComponent').then(m => m.ProfileComponent) },
  { path: 'dashboard', loadComponent: () => import('dashboard/DashboardComponent').then(m => m.DashboardComponent) },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }