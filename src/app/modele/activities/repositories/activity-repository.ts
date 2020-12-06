import { Observable } from 'rxjs';
import {Activities, Activity} from '../types/activity';
import {ActivityToAdd} from '../types/activityToAdd';

export interface ActivityRepository {
  getByCategoryId(categoryId:number) : Observable<Activities>;

  create(activity:ActivityToAdd) : Observable<Activity>;

  delete(id:number): Observable<any>;

  update(id:number,activity:Activity): Observable<any>;
}
