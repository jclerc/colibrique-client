import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <nav class="navigation">
      <a class="navigation-logo" routerLink="/home" routerLinkActive="active">colibrique <span class="navigation-logo-special">v2</span></a>
      <a class="navigation-link" routerLink="/home" routerLinkActive="active">Cours</a>
      <a class="navigation-link" routerLink="/home" routerLinkActive="active">Planning</a>
      <a class="navigation-link" routerLink="/home" routerLinkActive="active">Devoirs</a>
      <a class="navigation-link" routerLink="/home" routerLinkActive="active">Messagerie</a>
      <a class="navigation-link" routerLink="/home" routerLinkActive="active">Notes</a>
      <div class="navigation__profile">
        <a routerLink="/home" routerLinkActive="active">
            <div class="navigation__profile-picture"></div>
        </a>
        <a class="navigation__profile-disconnect" routerLink="/home" routerLinkActive="active">Se déconnecter</a>
      </div>
    </nav>
    `
})

export class NavigationComponent {
}