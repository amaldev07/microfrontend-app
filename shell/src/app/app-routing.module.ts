import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('profile/AppModule').then(m => m.AppModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/AppModule').then(m => m.AppModule),
  },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
