import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../main/main.component';
import {ProfileComponent} from './profile.component';
import {IMCComponent} from './IMC/imc.component';


const routes: Routes = [
  {
    path:'main',component:MainComponent,
    children: [
      {
        path: 'profile', component: ProfileComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
  static components = [
    ProfileComponent,
    IMCComponent
  ];
}
