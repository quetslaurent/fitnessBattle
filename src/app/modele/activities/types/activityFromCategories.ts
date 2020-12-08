import {Category} from '../../categories/types/category';
import {Unit} from '../../units/types/unit';

export interface ActivityFromCategories{
  id?:number;
  name:string;
  repetitions:number;
  unit:Unit;
  category:Category;
}

export declare type ActivitiesFromCategories = ActivityFromCategories[];

