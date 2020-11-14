import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionRoutingModule } from './connection-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ConnectionRoutingModule.components],
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ConnectionModule {

}
