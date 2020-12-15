import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthApiService} from '../modele/auth/repositories/auth-api.service';
import {Router} from '@angular/router';
import {UsersApiService} from '../modele/users/repositories/users-api.service';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  /*
  Cette classe permet d'afficher la page de connection.
   */

  //formulaire de connection
  formLogIn:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    password:['',Validators.required]
  });

  //formulaire d'inscription
  formSignIn:FormGroup = this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });


  isVisible: boolean = true;//isVisible, used to show one form or another
  invalidToken: string;//error message if its an invalid user in logIn form
  isLoginInvalid: boolean = false;//show the error message if its an invalid user in logIn form

  //sign in
  isInvalidSignIn: boolean = false;
  invalidSignIn: string;


  constructor(public fb:FormBuilder,private  authService:AuthApiService,public router:Router,private userService:UsersApiService) { }

  ngOnInit(): void {
  }

  //connecte l'utilisateur si il existe dans la BD, lui donne un token pour ses requêtes et le redirige vers son profil
  logIn():void {
    this.authService.login(this.formLogIn.value).subscribe(
      data => {
        this.router.navigate(['main/profile']),
        localStorage.setItem("token",data.token);
      },
      error => {
        this.invalidToken = error.error, this.isLoginInvalid = true;
      });
  }

  //inscris l'utilisateur dans la DB et affiche le formulaire de connection
  signIn() {
      this.userService.create(this.formSignIn.value).subscribe(
        data => {
          this.changeVisible()
        },
        error => {
          this.invalidSignIn = "This email or username is already used", this.isInvalidSignIn = true
        }
      );
  }

  changeVisible() {
    this.isVisible = !this.isVisible;
  }
}
