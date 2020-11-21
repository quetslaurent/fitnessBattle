import { Component, OnInit } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  users: User[] = [
    {
      name :"Joey Hage",
      points : 13
    },
    {
      name :"Louviaux  Nicolas",
      points : 6
    },
    {
      name :"Guillaume Mercier",
      points : 135
    },
    {
      name :"Laurent Quets",
      points : 68
    },
    {
      name :"Dwayne Jhonson",
      points : 740
    },


  ];

  ngOnInit(): void {
    this.users.sort((a,b)=>(a.points < b.points) ? 1 : -1);
  }

}
