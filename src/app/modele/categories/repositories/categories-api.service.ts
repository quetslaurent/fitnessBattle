import { Injectable } from '@angular/core';
import {CategoryRepository} from './category-repository';
import {Categories, Category} from '../types/category';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ActivitiesByCategories} from '../types/ActivitiesByCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService implements CategoryRepository{

  static readonly URL:string = environment.serverAddress+'api/categories';

  constructor(private http:HttpClient) { }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(CategoriesApiService.URL,category);
  }

  query(): Observable<Categories> {
    return this.http.get<Categories>(CategoriesApiService.URL);
  }

  getActivitiesByCategory(): Observable<ActivitiesByCategories> {
    return this.http.get<ActivitiesByCategories>(CategoriesApiService.URL+"/activities");;
  }


}
