import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainRoutingModule.components],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {

}
