import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
}

