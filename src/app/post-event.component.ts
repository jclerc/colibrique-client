import { Component } from '@angular/core';

@Component({
  selector: 'post-event',
  template: `
     <div class="post-homework-container">
       <div class="post-recent">
        <div class="post-recent-legend">
           <p>Prochain évenement</p>
         </div>
         <div class="post-item post-item-homework">
           <div class="post-profile-container">
             <div class="post-profile-picture post-homework-picture"></div>
             <div class="post-profile-infos">
               <p class="post-profile-name">Bob Dylan</p>
               <p class="post-profile-date post-homework-profile-modifier">14 Février - 16h01</p>
             </div>
           </div>
           <div class="post-item-content post-homework-profile-modifier">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore asperiores expedita, sequi illo aperiam veritatis similique modi ipsam quia ab quaerat ipsum assumenda aliquam laudantium alias voluptatem blanditiis dicta rerum.</div>
         </div>
      <div class="post-old"></div>
     </div>
    `
})

export class PostEventComponent {
}