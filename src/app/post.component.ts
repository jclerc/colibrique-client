import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'post',
  template: `
     <div class="post-container">
       <div class="post-recent">
        <div class="post-recent-legend">
           <p>Récemment posté :</p>
           <div class="post-filter">
             <div class="dropdown-arrow"></div>
             <p class="">Filtrer</p>
           </div>
         </div>
         <div class="post-item">
           <div class="post-profile-container">
             <div class="post-profile-picture"></div>
             <div class="post-profile-infos">
               <p class="post-profile-name">Bob Dylan</p>
               <p class="post-profile-date">14 Février - 16h01 - Montreuil, Île de France</p>
             </div>
           </div>
           <div class="post-item-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore asperiores expedita, sequi illo aperiam veritatis similique modi ipsam quia ab quaerat ipsum assumenda aliquam laudantium alias voluptatem blanditiis dicta rerum.</div>
         </div>
         <p class="post-comment-hidenshow">Masquer les commentaires</p>
         <div class="post-comment-list">
           <div class="post-profile-picture"></div>
             <div class="post-profile-infos">
               <p class="post-profile-name">Bob Dylan</p>
               <p class="post-profile-date">14 Février - 16h01 - Montreuil, Île de France</p>
             </div>
         </div>
         <div class="post-item-comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore asperiores expedita, sequi illo aperiam veritatis similique modi ipsam quia ab quaerat ipsum assumenda aliquam laudantium alias voluptatem blanditiis dicta rerum.</div>
      </div>
      <div class="post-old"></div>
     </div>
    `
})

export class PostComponent {

  constructor(public http: Http) {

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    this.http.get('http://localhost:8000/api/v1/posts', {
      headers
    }).map(res => {
      let body = res.json();
      return body;
    }).catch((error: any) => {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw('Mauvais identifiants');
    }).subscribe(
      data => console.log('success', data),
      err => console.error('error', err),
      () => console.log('Request /posts complete')
    );

  }

}
