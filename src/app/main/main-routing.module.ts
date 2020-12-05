import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";
import {NavComponent} from "../commons/nav/nav.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
  static components = [
    MainComponent,
    NavComponent
  ];
}
