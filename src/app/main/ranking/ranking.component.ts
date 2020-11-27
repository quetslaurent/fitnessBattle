import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Users} from '../../modele/users/types/user';
import {UsersApiService} from '../../modele/users/repositories/users-api.service';

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


  points:number;

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.query()
    .subscribe(users =>this.users=users);
  }
}
