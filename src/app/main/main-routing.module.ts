import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";
import {StatsComponent} from "./stats/stats.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path:'main',component:MainComponent
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
    ProfileComponent
  ];
}
