import { Component } from '@angular/core';
import { LoginComponent } from './login.component';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <div class="app-container">
      <login></login>
    </div>
    `
})

export class AppComponent {
  title = 'Tour of users';
  user: User = {
    id: 1,
    name: 'Jambon'
  };
}