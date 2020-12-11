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

  displayTrainings(id) {
    this.getTrainings(id);
    this.isTrainingVisible = true;
    this.isUserVisible = false;
  }

  hideTrainings() {
    this.isTrainingVisible= false;
    this.isUserVisible = true;
  }
}
