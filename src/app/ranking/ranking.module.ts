import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';


@NgModule({
  declarations: [RankingRoutingModule.components],
  imports: [
    CommonModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
