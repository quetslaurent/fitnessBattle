import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [MainRoutingModule.components, AboutUsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {

}
