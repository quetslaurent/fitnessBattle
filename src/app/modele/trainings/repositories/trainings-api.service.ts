import { Injectable } from '@angular/core';
import {TrainingsRepository} from './trainings-repository';
import {Training, Trainings} from '../types/training';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {TrainingToAdd} from '../types/trainingToAdd';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService implements TrainingsRepository{

  /*
Cette classe permet d'envoyer des requêtes à l'api
 */


  static readonly URL:string = environment.serverAddress+'api/training';

  //permet d'ajouter le token de l'utisateur dans la requête afin que la requête soit autorisée


  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http:HttpClient) { }

  create(trainingToAdd: TrainingToAdd): Observable<Training> {
    return this.http.post<Training>(TrainingsApiService.URL,trainingToAdd, this.requestOptions);
  }

  getByTrainingDateId(dateId: number): Observable<Trainings> {
    return this.http.get<Trainings>(TrainingsApiService.URL+"/date/"+dateId, this.requestOptions);
  }

  getByUserId(token: string): Observable<Trainings> {
    return this.http.get<Trainings>(TrainingsApiService.URL+"/user/"+token, this.requestOptions);
  }

  delete(id:number): Observable<any> {
    return this.http.delete(TrainingsApiService.URL+"/"+id,this.requestOptions);
  }
}

