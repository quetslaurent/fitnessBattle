import { Injectable } from '@angular/core';
import {UnitRepository} from './unit-repository';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Unit, Units} from '../types/unit';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitApiService implements UnitRepository{

  /*
Cette classe permet d'envoyer des requêtes à l'api
 */


  constructor(private http:HttpClient) { }

  static readonly URL:string = environment.serverAddress+'api/units';

  //permet d'ajouter le token de l'utisateur dans la requête afin que la requête soit autorisée


  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  create(unit: Unit): Observable<Unit> {
    return this.http.post<Unit>(UnitApiService.URL,unit,this.requestOptions);
  }

  query(): Observable<Units> {
    return this.http.get<Units>(UnitApiService.URL,this.requestOptions);
  }
}
