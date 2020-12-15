import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';


@NgModule({
  declarations: [ApplicationRoutingModule.components],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule {
  /*
  Cette classe concerne la redirection vers la page playstore de l'application mobile Fitness Battle
   */
}
