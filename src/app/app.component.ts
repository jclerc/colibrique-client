import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { NavigationComponent }  from './navigation.component';

export class User {
}

@Component({
  selector: 'app',
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent {
}