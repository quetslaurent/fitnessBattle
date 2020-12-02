import {User} from '../../users/types/user';

export interface Training{

  id?:number;
  user:User;
  repetitions:number;
  points:number;
  trainingDateValue:Date;
  activityName:string;
}

export declare type Trainings = Training[];
