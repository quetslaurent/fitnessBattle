import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Activities, Activity} from '../../modele/activities/types/activity';
import {ActivitiesApiService} from '../../modele/activities/repositories/activities-api.service';
import {Category} from '../../modele/categories/category';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAddActivity: boolean = false;

  activitiesBookmarked: Activity[];

  activitiesAvailable: Activity[];

  activities: Activities = [];

  categories: Category[];


  formIMC:FormGroup = this.fb.group({
    wheight:['',Validators.required],
    height:['',Validators.required]
  });

  IMC: number = 0;
  IMCColor = "blue";
  IMCQuote:string;
  isIMCVisible:boolean=false;

  constructor(public fb:FormBuilder,private activityService : ActivitiesApiService) { }

  ngOnInit(): void {
    this.getActivities(1);
  }


  private getActivities(id:number) {
    this.activityService.getByCategoryId(id)
      .subscribe(activities => this.activities=activities);
    console.log(this.activities);
  }



  changeAddActivityView() {
    this.isAddActivity = !this.isAddActivity;
  }

  decrease(act: Activity) {
    /*
    if(act.rep>0)
      act.rep--;
      */

  }

  increase(act: Activity) {
    /*
    act.rep++;
    */
  }

  bookmark(act: Activity) {
    for(let element of this.activitiesBookmarked) {
      if(element.name === act.name) {
        return;
      }
    }
    this.activitiesBookmarked.push(act);
  }

  unBookmark(act: Activity) {
    for(let element of this.activitiesBookmarked) {
      if(element.name === act.name) {
        let index = this.activitiesBookmarked.indexOf(element, 0);
        if (index > -1) {
          this.activitiesBookmarked.splice(index, 1);
        }
      }
    }
  }

  processIMC() {


    this.IMC = Math.round(this.formIMC.value.wheight / (Math.pow(this.formIMC.value.height/100,2))*100)/100;
    this.isIMCVisible=true;

    if (this.IMC >= 18.5 && this.IMC<=25) {
      this.IMCColor = "lime";
      this.IMCQuote = "Vous êtes en parfaite santé"

    }
    else if (this.IMC>25 && this.IMC<=35) {
      this.IMCColor = "orange";
      this.IMCQuote = "Il serait temps de gagner quelques points"

    }
    else {
      this.IMCColor = "red";
      this.IMCQuote = "Il est grand temps de vous remettre au sport"

    }

  }
}
