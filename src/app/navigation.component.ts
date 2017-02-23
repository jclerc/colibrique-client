import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <nav class="navigation">
      <a class="navigation-logo" routerLink="/home" routerLinkActive="active">colibrique <span class="navigation-logo-special">v2</span></a>
      <a class="navigation-link" routerLink="/cours" routerLinkActive="active">Cours</a>
      <a class="navigation-link" routerLink="/planning" routerLinkActive="active">Planning</a>
      <a class="navigation-link" routerLink="/homework" routerLinkActive="active">Devoirs</a>
      <a class="navigation-link" routerLink="/messaging" routerLinkActive="active">Messagerie</a>
      <a class="navigation-link" routerLink="/notes" routerLinkActive="active">Notes</a>
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