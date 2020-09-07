import { Injectable } from '@angular/core';
import { Shop } from '../models/Shop';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShopService {
shops:Shop[];
data : Observable<any>;
shopData: Observable<any>;

  constructor() {
this.shops = [
  {
    name : 'Apple Store',
    address : {
city : 'Scarb',
street : 'Toronto',
    },
    shown:false
  },
  {
    name : 'Samsung Store',
    address : {
city : 'Missi',
street : 'Ontario',

    },
    shown:false
  }
]
   }

  

   addShop(shop:Shop){
     this.shops.push(shop);
   }

   getData(){
    this.data = new Observable(observer =>{
      setTimeout(() =>{
        observer.next('Hello');
      }, 1000
      );

      setTimeout(() =>{
        observer.next('Dear');
      }, 3000
      );

      setTimeout(() =>{
        observer.next('Lando');
      }, 5000
      );
    });

    return this.data;
  }

  getShopData(){
    this.shopData = new Observable(observer => {
      observer.next(this.shopData);
    });
    return this.shopData;
  }

  shopList():Shop[]{
    return this.shops;
   }

   getShopList():Observable<Shop[]>{
  return of(this.shops);
   }
}
