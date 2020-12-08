import {ActivitiesFromCategories} from '../../activities/types/activityFromCategories';

export interface ActivitiesByCategory{

  id?:number;
  name:string;
  activities: ActivitiesFromCategories;
}

export declare type ActivitiesByCategories = ActivitiesByCategory[];
