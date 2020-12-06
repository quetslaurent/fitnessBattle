import { Component, OnInit } from '@angular/core';
import {UserToken} from '../../modele/token/types/userToken';
import {TokenApiService} from '../../modele/token/repositories/token-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private tokenService:TokenApiService) { }

  userToken:UserToken={name:"",email:"",role:""};
  isAdmin:boolean=false;

  ngOnInit(): void {
    this.getUser();

  }

  checkAdmin() {
    if(this.userToken.role=="admin")
      this.isAdmin= true;
  }

  private getUser(){
    this.tokenService.getUserFromToken(localStorage.getItem("token")).subscribe(userToken =>{this.userToken=userToken;this.checkAdmin();});
  }

}
