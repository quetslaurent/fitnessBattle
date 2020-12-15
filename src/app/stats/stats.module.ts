import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';


@NgModule({
  declarations: [StatsRoutingModule.components],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule {
  //Classe permettant d'afficher le graphique amcharts des entrainements et la liste des entrainements de l'utilisateur
}
