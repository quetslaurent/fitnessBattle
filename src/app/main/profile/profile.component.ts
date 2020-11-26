import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivityType} from "./activityType";
import {Activity} from '../../modele/activities/activity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAddActivity: boolean = false;

  activitiesBookmarked: Activity[];/* = [
      {
        name :"Swimming",
        repetitions : 13
      },
      {
        name :"Running",
        rep : 24
      },
      {
        name :"Walking",
        rep : 6
      }
    ];

  activitiesAvailable: Activity[] = [
    {
      name :"Swimming",
      rep : 0
    },
    {
      name :"Running",
      rep : 0
    },
    {
      name :"Walking",
      rep : 0
    },
    {
      name :"Push up",
      rep : 0
    }
  ];*/

  activityTypes: ActivityType[];/* = [
    {
      name:"Cardio",
      activities :[
        {
          name :"Swimming",
          rep : 12
        },
        {
          name :"Running",
          rep : 17
        },
        {
          name :"Walking",
          rep : 3
        },
        {
          name :"Push up",
          rep : 36
        }
      ]
    },
    {
      name:"Upper Body",
      activities :[
        {
          name :"Twist curl",
          rep : 1
        },
        {
          name :"Free wheight",
          rep : 34
        },
        {
          name :"SOme exercices",
          rep : 3
        },
        {
          name :"POMPELUP",
          rep : 99
        }
      ]
    }
  ];
*/
  formIMC:FormGroup = this.fb.group({
    wheight:['',Validators.required],
    height:['',Validators.required]
  });

  IMC: number = 0;
  IMCColor = "blue";
  IMCQuote:string;
  isIMCVisible:boolean=false;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
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
