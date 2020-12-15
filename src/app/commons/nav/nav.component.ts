import { Component, OnInit } from '@angular/core';
import {UserToken} from '../../modele/token/types/userToken';
import {TokenApiService} from '../../modele/token/repositories/token-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  /*
  Cette classe concerne l'affichage de la barre de navigation présente sur le dessus du site
   */
  constructor(private tokenService:TokenApiService) { }

  userToken:UserToken={name:"",email:"",role:""};
  isAdmin:boolean=false;

  ngOnInit(): void {
    this.getUser();

  }

  //permet de détecter si l'utilisateur est un adiministrateur afin d'afficher ou non l'onglet administrateur
  checkAdmin() {
    if(this.userToken.role=="admin")
      this.isAdmin= true;
  }

  //récupere un user depuis le token
  private getUser(){
    this.tokenService.getUserFromToken(localStorage.getItem("token")).subscribe(userToken =>{this.userToken=userToken;this.checkAdmin();});
  }

  //supprime le token lors de la déconnection de l'utilisateur. Si celui-ci coupe le site sans se déconnecté, il pourra encore utiliser son token pendant 1 jour
  logOut() {
    localStorage.setItem("token","");
  }
}
