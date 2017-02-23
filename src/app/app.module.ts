import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import { NavigationComponent }  from './navigation.component';
import { PostAnnonceComponent }  from './post-annonce.component';
import { HomeComponent }  from './home.component';
import { PostComponent }  from './post.component';
import { ClassComponent }  from './class.component';
import { PlanningComponent }  from './planning.component';
import { HomeworkComponent }  from './homework.component';
import { NotesComponent }  from './notes.component';
import { MessagingComponent }  from './messaging.component';
import { PostHomeworkComponent }  from './post-homework.component';
import { PostEventComponent }  from './post-event.component';
import { ClassSearchComponent }  from './class-search.component';
import { ClassListComponent }  from './class-list.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cours', component: ClassComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'homework', component: HomeworkComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'messaging', component: MessagingComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    PostAnnonceComponent,
    PostComponent,
    ClassComponent,
    PlanningComponent,
    HomeworkComponent,
    NotesComponent,
    MessagingComponent,
    PostHomeworkComponent,
    PostEventComponent,
    ClassSearchComponent,
    ClassListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
