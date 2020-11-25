import {Unit} from '../units/unit';
import {Category} from '../categories/category';

export interface Activity{

  id?:number;
  name:string;
  repetitions:number;
  unit:Unit;
  category:Category;
}

export declare type Activities = Activity[];
