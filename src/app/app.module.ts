import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {LogInRoutingModule} from './connection/log-in/log-in-routing.module';
import {SignInRoutingModule} from './connection/sign-in/sign-in-routing.module';
import {ProfileRoutingModule} from './user/profile/profile–routing.module';

@NgModule({
  declarations: [AppRoutingModule.components],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        LogInRoutingModule,
        SignInRoutingModule,
        ProfileRoutingModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
