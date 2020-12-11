import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {TrainingDatesRepository} from './training-dates-repository';
import {TrainingDate, TrainingDates} from '../types/trainingDate';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingDatesApiService implements TrainingDatesRepository{

  static readonly URL:string = environment.serverAddress+'api/training-dates';

  constructor(private http:HttpClient) { }

  static headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  static readonly requestOptions= {
    headers: new HttpHeaders(TrainingDatesApiService.headerDict)
  };

  create(trainingDate: TrainingDate): Observable<TrainingDate> {
    return this.http.post<TrainingDate>(TrainingDatesApiService.URL,trainingDate, TrainingDatesApiService.requestOptions);
  }

  query(): Observable<TrainingDates> {
    return this.http.get<TrainingDates>(TrainingDatesApiService.URL, TrainingDatesApiService.requestOptions);
  }

  createToday(): Observable<TrainingDate>  {
    console.log(TrainingDatesApiService.requestOptions);
    return this.http.post<TrainingDate>(TrainingDatesApiService.URL+"/today", null,TrainingDatesApiService.requestOptions);
  }
}
