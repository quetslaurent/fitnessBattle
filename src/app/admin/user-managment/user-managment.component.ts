import { Component, OnInit } from '@angular/core';
import {Users} from '../../modele/users/types/user';
import {Trainings} from '../../modele/trainings/types/training';
import {UsersApiService} from '../../modele/users/repositories/users-api.service';
import {TrainingsApiService} from '../../modele/trainings/repositories/trainings-api.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

  /*
  Cette classe concerne le traitement des utilisateurs et l'affichage/supression de leurs entrainements
   */
  constructor(private userService:UsersApiService, private trainingService:TrainingsApiService) { }

  //users list
  users:Users;
  isUserVisible:boolean = true;

  //user trainings detail
  trainings:Trainings;
  isTrainingVisible:boolean = false;

  ngOnInit(): void {
    this.getUsers();
  }

  //USER

  //récupère les utilisateurs de la BD
  private getUsers() {
    this.userService.query()
      .subscribe(users =>this.users=users);
  }

  removeUser(id:number) {
    if(window.confirm("Are you sure to delete?")) {
      this.userService.delete(id)
        .subscribe();
      document.location.reload();
    }
  }

  //TRAININGS

  //récupère les trainings de la BD
  private getTrainings(id) {
    this.trainingService.getByUserId(id)
      .subscribe(trainings => this.trainings = trainings);
  }

  removeTraining(id: number) {
    if(window.confirm("Are you sure to delete?")) {
      this.trainingService.delete(id).subscribe();
      document.location.reload();
    }
  }

  //cache les utilisateurs pour afficher les trainings d'un utilisateur donné
  displayTrainings(id) {
    this.getTrainings(id);
    this.isTrainingVisible = true;
    this.isUserVisible = false;
  }

  //cache les trainings pour réafficher les utilisateurs
  hideTrainings() {
    this.isTrainingVisible= false;
    this.isUserVisible = true;
  }
}
