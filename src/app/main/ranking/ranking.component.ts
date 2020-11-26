import {Component, Injectable, Input, OnInit} from '@angular/core';
import {UserRanking, UserRankings} from './userRanking';
import {Users} from '../../modele/users/types/user';
import {UsersApiService} from '../../modele/users/repositories/users-api.service';
import {number} from '@amcharts/amcharts4/core';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class RankingComponent implements OnInit {

  constructor(private userService : UsersApiService) { }

  users: Users = [];

  userRankings: UserRankings = [];

  points:number;

  ngOnInit(): void {
    this.getUsers();
    this.setUserRankings();
    this.sortUsersRanking();
    //this.getPointsUser(1);
  }

  private sortUsersRanking() {
    this.userRankings.sort((a,b)=>(a.points < b.points) ? 1 : -1);
  }

  private getUsers() {
    this.userService.query()
      .subscribe(users =>{ this.users=users;console.log(this.users);});

  }

  private setUserRankings() {
    console.log(this.users);

    for(let user of this.users) {
      this.getPointsUser(user.id);
      console.log(this.points);
      this.addUserRanking(user.name, this.points);
    }
      /*this.getPointsUser(this.users[0].id);
      this.addUserRanking(this.users[0].name, this.points);*/
  }

  private getPointsUser(id:number) {
    this.userService.getPointsById(id)
      .subscribe(pt => this.points = pt);
  }

  private addUserRanking(name:string,points:number) {
    let userRanking:UserRanking={
      "name":"zz",
      "points":20
    };
    this.userRankings.push(userRanking);
  }

}
