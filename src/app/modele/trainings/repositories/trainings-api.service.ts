import { Injectable } from '@angular/core';
import {TrainingsRepository} from './trainings-repository';
import {Training, Trainings} from '../units/training';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService implements TrainingsRepository{

  static readonly URL:string = environment.serverAddress+'api/training';

  constructor(private http:HttpClient) { }

  create(training: Training): Observable<Training> {
    return this.http.post<Training>(TrainingsApiService.URL,training);
  }

  getByTrainingDateId(dateId: number): Observable<Trainings> {
    return this.http.get<Trainings>(TrainingsApiService.URL+"/date/"+dateId);
  }

  getByUserId(userId: number): Observable<Trainings> {
    return this.http.get<Trainings>(TrainingsApiService.URL+"/user/"+userId);
  }
}
