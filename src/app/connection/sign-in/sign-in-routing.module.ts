import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LogInComponent} from '../log-in/log-in.component';
import {SignInComponent} from './sign-in.component';

const routes: Routes = [
  {
    path:'signIn',component:SignInComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignInRoutingModule {
  static components = [
    LogInComponent
  ];
}
