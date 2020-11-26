import { Observable } from 'rxjs';
import {Activities, Activity} from '../types/activity';

export interface ActivityRepository {
  getByCategoryId(categoryId:number) : Observable<Activities>;

  create(activity:Activity) : Observable<Activity>;

  delete(id:number): Observable<any>;

  update(id:number,activity:Activity): Observable<any>;
}
