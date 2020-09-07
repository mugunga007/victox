import { Address } from './Address';

export class Shop{
  id?:number;
  name:string;
  address:Address;
  shown?:boolean = false;

  constructor(
    name:string, address:Address
  ){
this.name = name;
this.address = address;
  }
}