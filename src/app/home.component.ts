import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <navigation></navigation>
    <post-annonce></post-annonce>
    <div class="news">
      <post></post>
      <div class="news-homeworknevent">
        <post-homework></post-homework>
        <post-event></post-event>
      </div>
    </div>
    `
})

export class HomeComponent {
}