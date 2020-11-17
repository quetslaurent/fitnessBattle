import { Component, OnInit } from '@angular/core';
import {Activity} from "./activity";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAddActivity: boolean = false;

  activitiesBookmarked: Activity[] = [
      {
        name :"Swimming",
        rep : 13
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeAddActivityView() {
    this.isAddActivity = !this.isAddActivity;
  }

  decrease(act: Activity) {
    if(act.rep>0)
      act.rep--;
  }

  increase(act: Activity) {
    act.rep++;
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
}
