import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRepository} from '../users/user-repository';
import {User, Users} from '../users/user';
import {Subscription} from 'rxjs';

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
  //isVisible, used to show one form or another
  isVisible: boolean = true;

  //db connexion
  //@Output() userCreated: EventEmitter<User> = new EventEmitter<User>();
  users:Users = [];
  subscriptions:Subscription[]=[];


  constructor(public fb:FormBuilder,private userRepository:UserRepository) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(){
    //on s'abonne a la query retournée par query dans user api service
    this.subscriptions.push(
      this.userRepository.query().subscribe(users => this.users=users)
    );
  }

  //create new user
  postUser(user : User){
    this.subscriptions.push(
      this.userRepository.create(user).subscribe(user =>this.users.push(user))
    );
  }

  logIn(){

  }

  /*signIn(){
    this.userCreated.emit(this.formSignIn.value);
  }*/

  changeVisible() {
    this.isVisible = !this.isVisible;
  }
}
