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
import {TrainingsApiService} from '../modele/trainings/repositories/trainings-api.service';
import {TrainingDatesApiService} from '../modele/training-dates/repositories/training-dates-api.service';
import {TrainingToAdd} from '../modele/trainings/types/trainingToAdd';
import {TrainingDate} from '../modele/training-dates/types/trainingDate';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //PROFILE
  userToken:UserToken={name:"",email:"",role:""};
  points:number;

  //Add training
  activitiesAvailable : Activities;
  categories: Categories;

  rep: {[id:number]:number;} = {};
  categorieNameSelected : string;

  //Activities informations
  activitiesByCategories: ActivitiesByCategories;

  constructor(private categoryService : CategoriesApiService,
              private activityService : ActivitiesApiService,
              private tokenService : TokenApiService,
              private userService : UsersApiService,
              private trainingDateService: TrainingDatesApiService,
              private trainingService : TrainingsApiService,
              private router :Router) { }

  ngOnInit(): void {
    //user informations
    this.getUser();
    this.getPoints();
    //add training
    this.getCategories();
    this.getActivitiesAvailable();
    //activities informations
    this.getActivitiesByCategories();
  }

  getUser(){
    this.tokenService.getUserFromToken(localStorage.getItem("token")).subscribe(userToken =>{this.userToken=userToken;});
  }

  getPoints(){
    this.userService.getPointsById(localStorage.getItem("token")).subscribe(points =>{this.points=points;});
  }

  selfDelete() {
    if(window.confirm("Are you sure to delete?")){
      this.userService.selfDelete(localStorage.getItem("token")).subscribe();
      this.router.navigate(["../../connection"]);
    }
  }

  getActivitiesAvailable() {
    this.activityService.query().subscribe(activities => this.activitiesAvailable=activities);
  }

  getCategories() {
    this.categoryService.query().subscribe(categories => this.categories = categories);
  }

  sortActivities(name: string) {
    this.categorieNameSelected = name;
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
    this.trainingDateService.createToday().subscribe(trainingDate => {
      console.log(trainingDate);this.createTraining(trainingDate.id);
    });
  }

  createTraining(idDate:number) {
    let userIdFromToken:number = this.userToken.id;
    this.activitiesAvailable.forEach(act =>{
      let value:number = this.rep[act.id];
      if (value>0) {
        let trainingToAdd:TrainingToAdd = {
          activityId : act.id,
          repetitions : value,
          trainingDateId : idDate,
          userId : userIdFromToken
        }
        console.log(trainingToAdd);
        this.trainingService.create(trainingToAdd).subscribe();
        console.log(trainingToAdd);
      }
    });
  }

  getActivitiesByCategories(){
    this.categoryService.getActivitiesByCategory()
      .subscribe(activitiesByCategories =>{
        this.activitiesByCategories=activitiesByCategories;
      });
  }
}
