import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import { NavigationComponent }  from './navigation.component';
import { HomeComponent }  from './home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
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
    NavigationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
