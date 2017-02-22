import { Component } from '@angular/core';

@Component({
  selector: 'post-annonce',
  template: `
      <div class="post-annonce">
        <div class="post-annonce-list">
          <a class="post-annonce-item" routerLink="/home" routerLinkActive="active">Ajouter une image</a>
          <a class="post-annonce-item" routerLink="/home" routerLinkActive="active">Ajouter date/heure</a>
          <a class="post-annonce-item" routerLink="/home" routerLinkActive="active">Ajouter un lieu</a>
          <a class="post-annonce-item" routerLink="/home" routerLinkActive="active">Visibilité du post</a>
          <div class="dropdown-arrow"></div>
        </div>
        <input class="post-annonce__input" type="text" placeholder="Ecrire ici pour poster un message"/>
        <div class="post-annonce-category">
          <div class="post-annonce-category-container">
            <a class="post-annonce-category-text" routerLink="/home" routerLinkActive="active">Visibilité du post</a>
            <div class="dropdown-arrow"></div>
          </div>
          <button class="post-annonce-button">Publier</button>
        </div>
      </div>
    `
})

export class PostAnnonceComponent {
}