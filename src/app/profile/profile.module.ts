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
export class ProfileModule {
  //Classe comprenant l'ajout d'entrainement, les infos sur les activités, le calcul d'IMC (super important !!!!), l'affichage du profil
}
