
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Shell Application</h1>
    <nav>
      <a routerLink="profile">Profile</a> | 
      <a routerLink="dashboard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: []
})
export class AppComponent {}
