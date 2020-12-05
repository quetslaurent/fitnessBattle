import {Component, OnInit} from '@angular/core';
import {Users} from '../modele/users/types/user';
import {UsersApiService} from '../modele/users/repositories/users-api.service';
import {Trainings} from '../modele/trainings/types/training';
import {TrainingsApiService} from '../modele/trainings/repositories/trainings-api.service';
import {Activities} from '../modele/activities/types/activity';
import {ActivitiesApiService} from '../modele/activities/repositories/activities-api.service';
import {CategoriesApiService} from '../modele/categories/repositories/categories-api.service';
import {Categories} from '../modele/categories/types/category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService : UsersApiService,
              private trainingService : TrainingsApiService,
              private activityService : ActivitiesApiService,
              private categoryService : CategoriesApiService) { }

  //users list
  users:Users;
  isUserVisible:boolean = true;

  //user trainings detail
  trainings:Trainings;
  isTrainingVisible:boolean = false;

  //activity list
  activities:Activities;

  //category list
  categories:Categories;

  ngOnInit(): void {
    this.getUsers();
    this.getCategories();
    this.getActivities(1);
  }

  private getUsers() {
    this.userService.query()
      .subscribe(users =>this.users=users);
  }

  private getTrainings(id) {
    this.trainingService.getByUserId(id)
      .subscribe(trainings => this.trainings = trainings);
  }

  removeUser(id:number) {
    this.userService.delete(id)
      .subscribe();
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

  getCategories() {
    this.categoryService.query().subscribe(categories => this.categories = categories);
  }

  getActivities(id) {
    this.activityService.getByCategoryId(id).subscribe(activities => this.activities = activities);
  }
}
