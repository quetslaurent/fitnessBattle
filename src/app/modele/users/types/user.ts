export interface User{

  id?:number;
  name:string;
  email:string;
  password:string;
  role:string;
  points:number;
}

export declare type Users = User[];
