import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './profile/activities/activities.component';

@NgModule({
  declarations: [MainRoutingModule.components, AboutUsComponent, ActivitiesComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {

}
