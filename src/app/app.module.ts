import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

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
import { CalendarComponent }  from './calendar.component';
import { CalendarDayComponent }  from './calendar-day.component';
import { UploadHomeworkComponent }  from './upload-homework.component';
import { UploadedHomeworkComponent }  from './uploaded-homework.component';

import { CanActivateViaOAuthGuard } from './oAuth.canActivateGuard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate : [CanActivateViaOAuthGuard] },
  { path: 'cours', component: ClassComponent, canActivate : [CanActivateViaOAuthGuard] },
  { path: 'planning', component: PlanningComponent, canActivate : [CanActivateViaOAuthGuard] },
  { path: 'homework', component: HomeworkComponent, canActivate : [CanActivateViaOAuthGuard] },
  { path: 'notes', component: NotesComponent, canActivate : [CanActivateViaOAuthGuard] },
  { path: 'messaging', component: MessagingComponent, canActivate : [CanActivateViaOAuthGuard] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  providers: [
    CanActivateViaOAuthGuard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
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
    ClassListComponent,
    CalendarComponent,
    CalendarDayComponent,
    UploadHomeworkComponent,
    UploadedHomeworkComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
