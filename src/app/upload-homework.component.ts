import { Component } from '@angular/core';

@Component({
  selector: 'upload-homework',
  template: `
    <div class="post-annonce">
        <div class="post-annonce-list">
          <a class="post-annonce-item" routerLink="/home" routerLinkActive="active">Ajouter un zip</a>
          <a class="post-annonce-item" routerLink="/home" routerLinkActive="active">Ajouter date/heure</a>
        </div>
        <input class="post-annonce__input" type="text" placeholder="Écrire les consignes du devoir ici.."/>
        <div class="post-annonce-category">
          <div class="post-annonce-category-container">
            <a class="post-annonce-category-text" routerLink="/home" routerLinkActive="active">Choisir la matière</a>
            <div class="dropdown-arrow"></div>
          </div>
          <button class="post-annonce-button">Publier</button>
        </div>
    </div>
    <uploaded-homework></uploaded-homework>
    `
})

export class UploadHomeworkComponent {
}