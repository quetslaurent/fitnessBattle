import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { RankingComponent } from './ranking/ranking.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [MainRoutingModule.components],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule {

}
