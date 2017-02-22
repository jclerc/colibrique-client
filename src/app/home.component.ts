import { Component } from '@angular/core';
import { NavigationComponent }  from './navigation.component';
import { PostAnnonceComponent }  from './post-annonce.component';

@Component({
  selector: 'home',
  template: `
    <navigation></navigation>
    <post-annonce></post-annonce>
    `
})

export class HomeComponent {
}