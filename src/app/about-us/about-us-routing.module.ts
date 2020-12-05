import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../main/main.component';
import {AboutUsComponent} from './about-us.component';

const routes: Routes = [
  {
    path:'main',component:MainComponent,
    children: [
      {
        path: 'aboutUs', component: AboutUsComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
  static components = [
    AboutUsComponent
  ];
}
