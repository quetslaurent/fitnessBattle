import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formLogIn:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }

  logIn() {

  }
}
