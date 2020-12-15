import { Injectable } from '@angular/core';
import {TokenRepository} from './token-repository';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserToken} from '../types/userToken';

@Injectable({
  providedIn: 'root'
})
export class TokenApiService implements TokenRepository{

  /*
Cette classe permet d'envoyer des requêtes à l'api
 */


  static readonly URL:string = environment.serverAddress+'api/token';

  //permet d'ajouter le token de l'utisateur dans la requête afin que la requête soit autorisée



  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http:HttpClient) { }

  getUserFromToken(token: string): Observable<UserToken> {
    return this.http.get<UserToken>(TokenApiService.URL+"/"+token,this.requestOptions);
  }


}
