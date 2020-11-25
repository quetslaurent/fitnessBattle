import {Observable} from 'rxjs';
import {TrainingDate, TrainingDates} from './trainingDate';

export interface TrainingDatesRepository {
  query() : Observable<TrainingDates>;

  create(training:TrainingDate) : Observable<TrainingDate>;
}
