import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ConnectionModule} from './connection/connection.module';

@NgModule({
  declarations: [AppRoutingModule.components],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ConnectionModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
