import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  formLogIn:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
  formSignIn:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    username:['',Validators.required],
    password:['',Validators.required]
  });

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }
  signIn() {

  }

  logIn(){

  }

}
