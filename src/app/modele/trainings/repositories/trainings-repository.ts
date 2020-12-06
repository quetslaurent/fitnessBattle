import {Observable} from 'rxjs';
import {Training, Trainings} from '../types/training';


export interface TrainingsRepository {
  getByTrainingDateId(dateId:number) : Observable<Trainings>;
  getByUserId(token:string) : Observable<Trainings>;
  create(training:Training) : Observable<Training>;

}
