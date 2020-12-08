import { Injectable } from '@angular/core';
import {ActivityRepository} from './activity-repository';
import {Activities, Activity} from '../types/activity';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivityToManage} from '../types/activityToManage';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService implements ActivityRepository{

  static readonly URL:string = environment.serverAddress+'api/activity';

  headerDict = {
    'Authorization': 'Bearer '+ localStorage.getItem("token")
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http:HttpClient) { }

  create(activity: ActivityToManage): Observable<Activity> {
    return this.http.post<Activity>(ActivitiesApiService.URL,activity, this.requestOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(ActivitiesApiService.URL+"/"+id, this.requestOptions);
  }

  query(): Observable<Activities> {
    return this.http.get<Activities>(ActivitiesApiService.URL,this.requestOptions);
  }

  getByCategoryId(categoryId: number): Observable<Activities> {
    return this.http.get<Activities>(ActivitiesApiService.URL+'/'+categoryId,this.requestOptions);
  }

  update(id: number, activity: ActivityToManage): Observable<any> {
    return this.http.put(ActivitiesApiService.URL+'/'+id,activity, this.requestOptions);
  }
}
