import { Observable } from 'rxjs';
import {Activities, Activity} from '../types/activity';
import {ActivityToManage} from '../types/activityToManage';

export interface ActivityRepository {

  query(): Observable<Activities>;

  getByCategoryId(categoryId:number) : Observable<Activities>;

  create(activity:ActivityToManage) : Observable<Activity>;

  delete(id:number): Observable<any>;

  update(id:number,activity:ActivityToManage): Observable<any>;
}
