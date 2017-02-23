import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <navigation></navigation>
    <post-annonce></post-annonce>
    <div class="news">
      <post></post>
    </div>
    `
})

export class HomeComponent {
}