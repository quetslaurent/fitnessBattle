import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {RankingModule} from '../ranking/ranking.module';
import {StatsModule} from '../stats/stats.module';
import {AboutUsModule} from '../about-us/about-us.module';
import {ProfileModule} from '../profile/profile.module';

@NgModule({
  declarations: [MainRoutingModule.components],
  imports: [
    CommonModule,
    MainRoutingModule,
    RankingModule,
    StatsModule,
    AboutUsModule,
    ProfileModule
  ]
})
export class MainModule {

}
