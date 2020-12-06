import {Observable} from 'rxjs';
import {Unit, Units} from '../types/unit';


export interface UnitRepository {
  query() : Observable<Units>;
  create(activity:Unit) : Observable<Unit>;
}
