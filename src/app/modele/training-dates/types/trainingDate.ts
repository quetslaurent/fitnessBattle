import DateTimeFormat = Intl.DateTimeFormat;

export interface TrainingDate{
  id?:number;
  date:DateTimeFormat;
}

export declare type TrainingDates = TrainingDate[];
