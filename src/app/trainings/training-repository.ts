import {Observable} from 'rxjs';
import {Training} from './training';


export interface TrainingRepository {
  getByTrainingDateId(dateId:number) : Observable<Training>;

  create(training:Training) : Observable<Training>;

}
