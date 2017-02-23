import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  template: `
    <div class="login">
      <div class="login-title">
        <h1 class="login-title__text">colibrique <span class="login-title__text-special">v2</span></h1>
      </div>
      <form class="login__form" (ngSubmit)="onSubmit()">
        <div class="login__form-instructions">Veuillez vous connecter</div>
        <input type="text" class="login__form-input" placeholder="Identifiant" [(ngModel)]="username" name="username">
        <input type="password" class="login__form-input" placeholder="Mot de passe" [(ngModel)]="password" name="password">
        <div class="login__form-remember">
          <input type="checkbox">
          <p class="login__form-remember-text">Se souvenir de moi</p>
        </div>
        <input type="submit" class="login__form-btn btn">
      </form>
    </div>
    `,
  providers: [LoginService]
})

export class LoginComponent {

  username = null;
  password = null;

  constructor(public router: Router, private loginService: LoginService) {}

  onSubmit() {
    this.loginService.login(this.username, this.password)
     .subscribe(
       response => {
        localStorage.setItem('token', response.access_token);
        this.router.navigateByUrl('/home');
       },
       error => {
        alert(error);
       }
     );
  }
}
