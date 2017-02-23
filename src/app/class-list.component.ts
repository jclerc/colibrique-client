import { Component } from '@angular/core';

@Component({
  selector: 'class-list',
  template: `
  <div class="wrapper">
  <li class="curse">
    <span class="curse-name">PHP & SYMFONY</span>
    <span class="curse-teacher">Intervenant : Yann le Scouarnec</span>
    <button class="curse-button">Voir les cours</button>
  </li>
  </div>
  `
})

export class ClassListComponent {
}