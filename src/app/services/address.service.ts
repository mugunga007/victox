import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
addresses:Address[];
  constructor() { 
    this.addresses = [
      {
        city:'Toronto',
        street:'Tiago'
      },
      {
        city:'Ottawa',
        street:'Willngton'
      },
   
    ]
    var addr:Address = new Address('Victoria Park', 'Scarborough');
    var addr2:Address = new Address('Blackwing', 'Toronto');
 this.addresses.push(addr);
 this.addresses.push(addr2);
  }

  getAddresses():Address[]{
return this.addresses;
  }

  addAddress(address:Address){
  this.addresses.push(address);
  }
}
