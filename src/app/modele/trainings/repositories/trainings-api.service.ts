import { Injectable } from '@angular/core';
import {TrainingsRepository} from './trainings-repository';
import {Training, Trainings} from '../types/training';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService implements TrainingsRepository{

  static readonly URL:string = environment.serverAddress+'api/training';

  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http:HttpClient) { }

  create(training: Training): Observable<Training> {
    return this.http.post<Training>(TrainingsApiService.URL,training, this.requestOptions);
  }

  getByTrainingDateId(dateId: number): Observable<Trainings> {
    return this.http.get<Trainings>(TrainingsApiService.URL+"/date/"+dateId, this.requestOptions);
  }

  getByUserId(userId: number): Observable<Trainings> {
    return this.http.get<Trainings>(TrainingsApiService.URL+"/user/"+userId, this.requestOptions);
  }

  delete(id:number): Observable<any> {
    return this.http.delete(TrainingsApiService.URL+"/"+id,this.requestOptions);
  }
}

