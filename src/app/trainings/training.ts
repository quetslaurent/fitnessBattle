import {User} from '../users/user';
import {Activity} from '../activities/activity';
import {TrainingDate} from '../training-dates/trainingDate';

export interface Training{

  id?:number;
  user:User;
  repetitions:number;
  activity:Activity;
  trainingDate:TrainingDate;

}

export declare type Trainings = Training[];
