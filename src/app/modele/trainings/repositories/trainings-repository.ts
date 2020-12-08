import {Observable} from 'rxjs';
import {Training, Trainings} from '../types/training';
import {TrainingToAdd} from '../types/trainingToAdd';


export interface TrainingsRepository {
  getByTrainingDateId(dateId:number) : Observable<Trainings>;
  getByUserId(token:string) : Observable<Trainings>;
  create(trainingToAdd:TrainingToAdd) : Observable<Training>;

}
