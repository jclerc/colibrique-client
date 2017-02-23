import { Component } from '@angular/core';

@Component({
  selector: 'notes',
  template: `
    <navigation></navigation>
    <div class="wrapper">
    <div class="title">Accéder aux notes</div>
    <select>
      <option value="1">Trimestre 1</option>
      <option value="2">Trimestre 2</option>
      <option value="3">Trimestre 3</option>
    </select>
    <button>Télécharger les notes</button>
    <div class="subtitle">Notes du trimestre en cours</div>
    <div class="notes-curses">
      <div class="notes-curse">
        <div class="notes-curse__title">PHP & SYMFONY</div>
        <div class="class-curse__first">- Controle continu : 9/20</div>
        <div class="class-curse__second">- Partiel : 10/20</div>
      </div>
      <div class="notes-curse">
       <div class="notes-curse__title">PHP & SYMFONY</div>
        <div class="class-curse__first">- Controle continu : 9/20</div>
        <div class="class-curse__second">- Partiel : 10/20</div>
      </div>
      <div class="notes-curse">
       <div class="notes-curse__title">PHP & SYMFONY</div>
        <div class="class-curse__first">- Controle continu : 9/20</div>
        <div class="class-curse__second">- Partiel : 10/20</div>
      </div>
    </div>
    </div>
  `
})

export class NotesComponent {
}