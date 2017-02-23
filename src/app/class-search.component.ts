import { Component } from '@angular/core';

@Component({
  selector: 'class-search',
  template: `
  <div class="wrapper">
  <div class="title">Accéder aux cours</div>
  <div class="searchform">
  <select>
  <option value="2016">2016-2017</option>
  <option value="2015">2015-2016</option>
  <option value="2014">2014-2015</option>
  </select>
  <select>
  <option value="1">Trimestre 1</option>
  <option value="2">Trimestre 2</option>
  <option value="3">Trimestre 3</option>
  </select>
  <button>Rechercher</button>
  </div>
  <div class="subtitle">Liste des cours du Trimestre 2 - Année 2016 - 2017</div>
  </div>
  `
})

export class ClassSearchComponent {
}