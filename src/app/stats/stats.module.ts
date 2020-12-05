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
export class StatsModule { }
