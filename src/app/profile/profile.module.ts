import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProfileRoutingModule.components],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
