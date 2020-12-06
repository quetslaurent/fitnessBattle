import {Component, OnInit} from '@angular/core';
import {UserToken} from '../modele/token/types/userToken';
import {TokenApiService} from '../modele/token/repositories/token-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private tokenService:TokenApiService,
              public router: Router) {}

  userToken:UserToken={name:"",email:"",role:""};

  ngOnInit(): void {
    this.getUser();
  }

  checkAdmin() {
   if(!this.userToken.role) {
     //this.router.navigate(['connection']);
   }
  }

  private getUser(){
    this.tokenService.getUserFromToken(localStorage.getItem("token")).subscribe(userToken =>{this.userToken=userToken;this.checkAdmin();});
  }

}
