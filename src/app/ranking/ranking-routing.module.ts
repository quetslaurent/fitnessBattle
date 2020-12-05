import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RankingComponent} from './ranking.component';
import {MainComponent} from '../main/main.component';

const routes: Routes = [
  {
    path:'main',component:MainComponent,
    children: [
      {
        path: 'ranking', component: RankingComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule {
  static components = [
    RankingComponent
  ];
}
