export interface User{

  id?:number;
  name:string;
  email:string;
  password:string;
  admin:boolean;
}

export declare type Users = User[];
