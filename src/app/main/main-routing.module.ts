import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";
import {StatsComponent} from "./stats/stats.component";
import {ProfileComponent} from "./profile/profile.component";
import {NavComponent} from "../commons/nav/nav.component";
import {AboutUsComponent} from './about-us/about-us.component';
import {RankingComponent} from "./ranking/ranking.component";

const routes: Routes = [
  {
    path:'main',component:MainComponent,
    children: [
      {
        path: 'profile', component: ProfileComponent,
        canActivate: []
      },
      {
        path: 'stats', component: StatsComponent,
        canActivate: []
      },
      {
        path: 'aboutUs', component: AboutUsComponent,
        canActivate: []
      },
      {
        path: 'ranking', component: RankingComponent,
        canActivate: []
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
  static components = [
    MainComponent,
    StatsComponent,
    ProfileComponent,
    AboutUsComponent,
    RankingComponent,
    NavComponent
  ];
}
