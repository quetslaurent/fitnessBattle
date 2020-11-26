import { Injectable } from '@angular/core';
import {UserRepository} from './user-repository';
import {User, Users} from '../types/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService implements UserRepository{

  static readonly URL:string = environment.serverAddress+'api/users';

  constructor(private http:HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(UsersApiService.URL,user);
  }

  query(): Observable<Users> {
    return this.http.get<Users>(UsersApiService.URL);
  }

  getPointsById(id: number): Observable<number> {
    return this.http.get<number>(UsersApiService.URL+"/points/"+id);
  }
}
