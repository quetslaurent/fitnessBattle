import {Activities} from '../../activities/types/activity';

export interface ActivitiesByCategory{

  id?:number;
  name:string;
  activities: Activities;
}

export declare type ActivitiesByCategories = ActivitiesByCategory[];
