import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ConnectionModule} from "./connection/connection.module";
import {MainModule} from "./main/main.module";
import { UsersComponent } from './users/users.component';
import { ActivitiesComponent } from './activities.component';
import { UnitsComponent } from './units/units.component';
import { CategoriesComponent } from './categories/categories.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingDatesComponent } from './training-dates/training-dates.component';

@NgModule({
  declarations: [AppRoutingModule.components, UsersComponent, ActivitiesComponent, UnitsComponent, CategoriesComponent, TrainingsComponent, TrainingDatesComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ConnectionModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
