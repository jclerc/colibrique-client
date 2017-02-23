import { Component } from '@angular/core';

@Component({
  selector: 'uploaded-homework',
  template: `
          <div class="post-container">
            <div class="post-recent-legend uploaded-legend-modifier">
               <p>Les devoirs que vous avez ajouté</p>
            </div>
            <div class="uploaded-homework-container">
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
             <button class="post-annonce-button uploaded-homework-button">Supprimer</button>
            </div>
    `
})

export class UploadedHomeworkComponent {
}