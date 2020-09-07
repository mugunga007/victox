import { Component, OnInit, ViewChild } from '@angular/core';
import { Address } from 'src/app/models/Address';
import { viewClassName } from '@angular/compiler';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addresses:Address[];
  address:Address = {
    city:'',
    street: ''
  };
  formShow:boolean = false;
  inlineShow:boolean = false;
  @ViewChild('addForm',{static: false}) form: any;

  constructor(
    private addressService:AddressService
  ) { }

  addAddress(){
    this.addresses.push(this.address);
    this.address = {
      city:'',
      street: ''
    }
  }
  ngOnInit() {
   this.addresses = this.addressService.getAddresses();
  }

  // addNew(){
  //   this.addresses.push(this.address);
  //   this.address = {
  //     city:'',
  //     street: ''
  //   }
  // }

  onSubmit({value, valid}: {value: Address, valid:boolean}){
  if(!valid){
    console.log("Not valid");
  }else{
    // this.addresses.push(value);
    this.addressService.addAddress(value);
    this.form.reset();
  }
  }

}
