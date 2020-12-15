import { Injectable } from '@angular/core';
import {AuthRepository} from './auth-repository';
import {User} from '../../users/types/user';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthRepository{

  /*
Cette classe permet d'envoyer des requêtes à l'api
 */


  static readonly URL:string = environment.serverAddress+'api/auth';

  constructor(private http:HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>(AuthApiService.URL,user);
  }
}
