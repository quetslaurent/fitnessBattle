import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationComponent} from './application.component';
import {MainComponent} from '../main/main.component';

const routes: Routes = [
  {
    path:'main',component:MainComponent,
    children: [
      {
        path: 'application', component: ApplicationComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {
  static components = [
    ApplicationComponent
  ];

}
