import {Observable} from 'rxjs';
import {Unit} from './unit';


export interface UnitRepository {
  query() : Observable<Unit>;

  create(activity:Unit) : Observable<Unit>;

}
