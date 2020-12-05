import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../main/main.component';
import {StatsComponent} from './stats.component';

const routes: Routes = [
  {
    path:'main',component:MainComponent,
    children: [
      {
        path: 'stats', component: StatsComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule {
  static components = [
    StatsComponent
  ];
}
