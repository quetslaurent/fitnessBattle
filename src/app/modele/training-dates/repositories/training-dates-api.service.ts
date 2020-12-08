import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {TrainingDatesRepository} from './training-dates-repository';
import {TrainingDate, TrainingDates} from '../types/trainingDate';
import {Observable} from 'rxjs';
import {Training, Trainings} from '../../trainings/types/training';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingDatesApiService implements TrainingDatesRepository{

  static readonly URL:string = environment.serverAddress+'api/training-dates';

  constructor(private http:HttpClient) { }

  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  create(trainingDate: TrainingDate): Observable<TrainingDate> {
    return this.http.post<TrainingDate>(TrainingDatesApiService.URL,trainingDate, this.requestOptions);
  }

  query(): Observable<TrainingDates> {
    return this.http.get<TrainingDates>(TrainingDatesApiService.URL, this.requestOptions);
  }
}
