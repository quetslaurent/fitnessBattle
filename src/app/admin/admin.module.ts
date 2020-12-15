import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { ActivityManagmentComponent } from './activity-managment/activity-managment.component';


@NgModule({
  declarations: [AdminRoutingModule.components, UserManagmentComponent, ActivityManagmentComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ]
})
export class AdminModule {
  /*
  Cette classe permet la gestion des activités, des users et des trainings. Elle est réservée aux utilisateurs ayant le rôle administrateur
   */
}
