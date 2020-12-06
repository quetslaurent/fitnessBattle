import { Injectable } from '@angular/core';
import {UserRepository} from './user-repository';
import {User, Users} from '../types/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {UserInputCreate} from '../types/userInputCreate';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService implements UserRepository{

  static readonly URL:string = environment.serverAddress+'api/users';

  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http:HttpClient) { }

  create(user: UserInputCreate): Observable<User> {
    return this.http.post<User>(UsersApiService.URL,user);
  }

  query(): Observable<Users> {
    return this.http.get<Users>(UsersApiService.URL, this.requestOptions);
  }

  getPointsById(token: string): Observable<number> {
    return this.http.get<number>(UsersApiService.URL+"/points/"+token, this.requestOptions);
  }

  delete(id: number) {
    return this.http.delete(UsersApiService.URL+"/"+id, this.requestOptions);
  }

  selfDelete(token: string) {
    return this.http.delete(UsersApiService.URL+"/"+token, this.requestOptions);
  }


}
