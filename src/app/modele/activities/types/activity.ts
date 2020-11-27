import {Category} from '../../categories/types/category';
import {Unit} from '../../units/unit';

export interface Activity{

  id?:number;
  name:string;
  repetitions:number;
  unit:Unit;
  category:Category;
}

export declare type Activities = Activity[];
