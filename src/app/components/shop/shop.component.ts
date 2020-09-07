import { Component, OnInit, ViewChild } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { ShopService } from 'src/app/services/shop.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shops:Shop[];
shop:Shop = {
  name:'',
  address:{
    city:'',
    street:''
  }
};
@ViewChild("shopForm",{static : false}) form : any;
showShopForm: boolean = false;
data: any;
shopComData:any;
  constructor(
    private shopService:ShopService
  ) { }

  ngOnInit() {
  // this.shops = this.shopService.shopList();
  // this.shopService.getData().subscribe(data =>{
  //   console.log(data);
  // });

  this.shopService.getShopList().subscribe(shopslist =>{
  this.shops = shopslist;
  });
  }

  onSubmit({value, valid}:{value:Shop, valid:boolean}){
    if(!valid){
      window.alert("nooo");
      console.log("Try again");

    }else{
    value.shown = false;
    this.shopService.addShop(value);
    this.form.reset();
    }

  }

  
  
}
