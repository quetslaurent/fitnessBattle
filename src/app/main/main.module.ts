import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {RankingModule} from '../ranking/ranking.module';
import {StatsModule} from '../stats/stats.module';
import {AboutUsModule} from '../about-us/about-us.module';
import {ProfileModule} from '../profile/profile.module';
import {AdminModule} from '../admin/admin.module';
import {ApplicationModule} from '../application/application.module';

@NgModule({
  declarations: [MainRoutingModule.components],
  imports: [
    CommonModule,
    MainRoutingModule,
    RankingModule,
    StatsModule,
    AboutUsModule,
    ProfileModule,
    AdminModule,
    ApplicationModule
  ]
})
export class MainModule {
  /*
  Classe mère comprenant tout les onglets du site
   */
}
