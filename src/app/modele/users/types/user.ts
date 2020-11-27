export interface User{

  id?:number;
  name:string;
  email:string;
  password:string;
  admin:boolean;
  points:number;
}

export declare type Users = User[];
