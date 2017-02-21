import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
    <div class="login">
      <div class="login-title">
        <h1 class="login-title__text">Colibrique v2</h1>
      </div>
      <form class="login__form">
        <div class="login__form-instructions">Veuillez vous connecter</div>
        <input class="login__form-input" placeholder="Identifiant">
        <input class="login__form-input" placeholder="Mot de passe">
        <div class="login__form-remember">
          <input type="checkbox">
          <p class="login__form-remember-text">Se souvenir de moi</p>
        </div>
        <input routerLink="/login" routerLinkActive="active" type="submit" class="login__form-btn btn">
      </form>
    </div>
    `
})

export class LoginComponent {
}