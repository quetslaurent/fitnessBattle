import { Component, OnInit } from '@angular/core';
import {Activities, Activity} from '../modele/activities/types/activity';
import {CategoriesApiService} from '../modele/categories/repositories/categories-api.service';
import {ActivitiesByCategories} from '../modele/categories/types/ActivitiesByCategory';
import {ActivitiesApiService} from '../modele/activities/repositories/activities-api.service';
import {TokenApiService} from '../modele/token/repositories/token-api.service';
import {UserToken} from '../modele/token/types/userToken';
import {UsersApiService} from '../modele/users/repositories/users-api.service';
import {Router} from '@angular/router';
import {Categories} from '../modele/categories/types/category';
import {Training, Trainings} from '../modele/trainings/types/training';
import {TrainingsApiService} from '../modele/trainings/repositories/trainings-api.service';
import {TrainingDatesApiService} from '../modele/training-dates/repositories/training-dates-api.service';
import {TrainingDate} from '../modele/training-dates/types/trainingDate';
import {TrainingToAdd} from '../modele/trainings/types/trainingToAdd';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //PROFILE
  userToken:UserToken={name:"",email:"",role:""};
  points:number;

  //Activities informations
  activitiesByCategories: ActivitiesByCategories;

  //Add training
  activitiesAvailable : Activities;
  categories: Categories;

  rep: {[id:number]:number;} = {};

  constructor(private categoryService : CategoriesApiService,
              private activityService : ActivitiesApiService,
              private tokenService : TokenApiService,
              private userService : UsersApiService,
              private trainingDateService: TrainingDatesApiService,
              private trainingService : TrainingsApiService,
              private router :Router) { }

  ngOnInit(): void {
    this.getUser();
    this.getActivitiesByCategories();
    this.getPoints();
    this.getCategories();
    this.getActivitiesAvailable(1);
  }

  private getUser(){
    this.tokenService.getUserFromToken(localStorage.getItem("token")).subscribe(userToken =>{this.userToken=userToken;});
  }

  private getPoints(){
    this.userService.getPointsById(localStorage.getItem("token")).subscribe(points =>{this.points=points;});
  }

  private getActivitiesByCategories(){
    this.categoryService.getActivitiesByCategory()
      .subscribe(activitiesByCategories =>{ this.activitiesByCategories=activitiesByCategories;console.log(activitiesByCategories)});
  }

  private getActivitiesAvailable(id:number) {
    this.activityService.getByCategoryId(id).subscribe(activities => this.activitiesAvailable=activities);
  }

  private getCategories() {
    this.categoryService.query().subscribe(categories => this.categories = categories);
  }

  public selfDelete() {
    if(window.confirm("Are you sure to delete?")){
      this.userService.selfDelete(localStorage.getItem("token")).subscribe();
      this.router.navigate(["../../connection"]);
    }
  }

  increaseRep(idAct: number) {
    this.rep[idAct] +=1;
  }

  decreaseRep(idAct: number) {
    if(this.rep[idAct]>0)
      this.rep[idAct] -=1;
  }

  getRep(idAct: number) : number {
    if(!this.rep.hasOwnProperty(idAct))
      this.rep[idAct] = 0;
    return this.rep[idAct];
  }

  addTrainings() {

    let trainingDate:TrainingDate = {
      date : new Intl.DateTimeFormat()
  }

    let trainingDateWithId;
    this.trainingDateService.create(trainingDate).subscribe(trainingDate => trainingDateWithId = trainingDate);


    let userIdFromToken:number = this.userToken.id;
    this.activitiesAvailable.forEach(act =>{
      let value:number = this.rep[act.id];
      if (value>0) {
        let trainingToAdd:TrainingToAdd = {
          activityId : act.id,
          repetitions : value,
          trainingDateId : trainingDateWithId.id,
          userId : userIdFromToken
        }
        this.trainingService.create(trainingToAdd).subscribe();
        console.log(trainingToAdd);
      }
    });
  }
}
