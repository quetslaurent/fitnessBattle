import {Component, Injectable, Input, OnInit} from '@angular/core';
import {UserRanking, UserRankings} from './userRanking';
import {User, Users} from '../../modele/users/types/user';
import {UsersApiService} from '../../modele/users/repositories/users-api.service';
import {TrainingsApiService} from '../../modele/trainings/repositories/trainings-api.service';
import {Trainings} from '../../modele/trainings/units/training';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class RankingComponent implements OnInit {

  constructor(private userService : UsersApiService, private trainingService : TrainingsApiService) { }

  users: Users = [];

  userRankings: UserRankings = [];

  points:number;

  ngOnInit(): void {
    this.getUsers();
    this.setUserRankings();
    this.sortUsersRanking();

  }

  private sortUsersRanking() {
    this.userRankings.sort((a,b)=>(a.points < b.points) ? 1 : -1);
  }

  private getUsers() {
    this.userService.query()
      .subscribe(users => this.users = users);
  }

  private setUserRankings() {
    for(let user of this.users) {
      this.getPointsUser(user.id);
      this.addUserRanking(user.name, this.points);
    }
  }

  private getPointsUser(id:number) {
    this.userService.getPointsById(id)
      .subscribe(pt => this.points = pt);
  }

  private addUserRanking(name:string,points:number) {
    let userRanking:UserRanking={
      "name":name,
      "points":points
    };
    this.userRankings.push(userRanking);
  }

}
