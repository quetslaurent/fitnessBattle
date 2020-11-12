import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './commons/not-found/not-found.component';
import {AppComponent} from './app.component';
import {ProfileComponent} from './user/profile/profile.component';
import {LogInComponent} from './connection/log-in/log-in.component';
import {SignInComponent} from './connection/sign-in/sign-in.component';
import {NavComponent} from './commons/nav/nav.component';
import {FooterComponent} from './commons/footer/footer.component';
import {HomeComponent} from './commons/home/home.component';

const routes : Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:'',redirectTo:"/home",pathMatch:"full"
  },
  {
    path: '**',component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  //declarations qui viennet de app module ts
  static components = [
    AppComponent,
    ProfileComponent,
    LogInComponent,
    SignInComponent,
    ProfileComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ];
}
