import {User} from '../../users/types/user';
import {TrainingDate} from '../../training-dates/trainingDate';
import {Activity} from '../../activities/types/activity';


export interface Training{

  id?:number;
  user:User;
  repetitions:number;
  activity:Activity;
  trainingDate:TrainingDate;
  points:number;

}

export declare type Trainings = Training[];
