import { Component, OnInit } from '@angular/core';
import {Activities, Activity} from '../modele/activities/types/activity';
import {CategoriesApiService} from '../modele/categories/repositories/categories-api.service';
import {ActivitiesByCategories} from '../modele/categories/types/ActivitiesByCategory';
import {ActivitiesApiService} from '../modele/activities/repositories/activities-api.service';
import {TokenApiService} from '../modele/token/repositories/token-api.service';
import {UserToken} from '../modele/token/types/userToken';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // isAddActivity: boolean = false;
  // activitiesBookmarked: Activities;
  // activitiesAvailable: Activities;


  activities : Activities;

  activitiesByCategories: ActivitiesByCategories;

  //PROFILE
  userToken:UserToken={name:"",email:"",role:false};


  constructor(private categoryService : CategoriesApiService,private activityService : ActivitiesApiService,private tokenService : TokenApiService) { }

  ngOnInit(): void {
    this.getUser();
    //this.getCategories();
    this.getActivitiesByCategoryId();

  }

  private getUser(){
    this.tokenService.getUserFromToken(localStorage.getItem("token")).subscribe(userToken =>{this.userToken=userToken;});
  }

  private getCategories(){
    this.categoryService.getActivitiesByCategory()
      .subscribe(activitiesByCategories => this.activitiesByCategories=activitiesByCategories);
  }


  private getActivitiesByCategoryId(){
    this.activityService.getByCategoryId(1).subscribe(activities => {this.activities=activities;console.log(this.activities);});
  }

  // changeAddActivityView() {
  //   this.isAddActivity = !this.isAddActivity;
  // }

  // decrease(act: Activity) {
  //   /*
  //   if(act.rep>0)
  //     act.rep--;*/
  // }
  //
  // increase(act: Activity) {
  //
  //   //act.rep++;
  //
  // }
  //
  // bookmark(act: Activity) {
  //   for(let element of this.activitiesBookmarked) {
  //     if(element.name === act.name) {
  //       return;
  //     }
  //   }
  //   this.activitiesBookmarked.push(act);
  // }
  //
  // unBookmark(act: Activity) {
  //   for(let element of this.activitiesBookmarked) {
  //     if(element.name === act.name) {
  //       let index = this.activitiesBookmarked.indexOf(element, 0);
  //       if (index > -1) {
  //         this.activitiesBookmarked.splice(index, 1);
  //       }
  //     }
  //   }
  // }
}
