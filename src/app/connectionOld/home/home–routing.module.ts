import { NgModule } from '@angular/core';
import {LogInComponent} from '../log-in/log-in.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: 'home',component: HomeComponent,
    children: [
      {
        path: 'signIn',component: SignInComponent,
        canActivate: []
      },
      {
        path: 'logIn',component: LogInComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [
    HomeComponent,
    LogInComponent,
    SignInComponent
  ];
}
