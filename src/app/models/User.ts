import { Address } from '../models/Address';



export class User{
  id?:number;
  names:string;
  address:Address;
  age:number;
  shown?:boolean;
  constructor(
    names:string,
    address:Address,
    age:number,
    shown:boolean
  ){
this.names = names;
this.address = address;
this.age = age;
this.shown = shown;
  }
  

}