
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h2>User Profile</h2>
    <p>Name: John Doe</p>
    <p>Email: john@example.com</p>
  `
})
export class ProfileComponent {}
