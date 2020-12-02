import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthApiService} from '../modele/auth/repositories/auth-api.service';
import {tryCatch} from 'rxjs/internal-compatibility';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  formLogIn:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    password:['',Validators.required]
  });

  formSignIn:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    name:['',Validators.required],
    password:['',Validators.required]
  });

  //isVisible, used to show one form or another
  isVisible: boolean = true;


  constructor(public fb:FormBuilder,private  authService:AuthApiService) { }

  ngOnInit(): void {
  }

  logIn():void {
    if(this.formLogIn.valid){
      this.authService.login(this.formLogIn.value).subscribe(
        data => alert(data.token),
        error => alert(error.error));
    }
  }

  changeVisible() {
    this.isVisible = !this.isVisible;
  }
}
