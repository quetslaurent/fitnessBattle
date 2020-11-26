import { Observable } from 'rxjs';
import {Activity} from './activity';

export interface ActivityRepository {
  getByCategoryId(categoryId:number) : Observable<Activity>;

  create(activity:Activity) : Observable<Activity>;

  delete(id:number): boolean;

  update(id:number,activity:Activity): boolean;
}
