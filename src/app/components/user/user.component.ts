import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:User[];
user:User;
addresses:Address[];
address:Address;
add : {};
enableAdd:boolean = false;
testvar:boolean = false;
show:boolean=false;
showForm:boolean = false;
showText:string = "Hide";
expand:{};

  constructor() { }

  increaseAge = (user:User):number =>{
  return user.age + 5;
  }

  
  addUser=()=>{
   this.add={
     'btn-danger':this.users.length ==0,
     'btn-warning':this.users.length ==1,
      'btn-success':this.users.length>=2
   }
  }

  logit=(e)=>{
    // console.log(e.target.type);
    console.log(e.target.value);
    this.showText = e.target.value;
  }

  ngOnInit() {
   
    var addr:Address = new Address('Victoria Park', 'Scarborough');
   
  this.users = [
    {
      names:"Hugo Boss",
      address:addr,
      age:35,
      shown:false,

      },
      {
        names:"Clay Ton",
        address:addr,
        age:25,
        shown:false
      
        },
        {
          names:"Riv Mington",
          address:addr,
          age:45,
          shown:false
          },
  ]
  if(this.users.length > 2)
  this.enableAdd = true;
  this.addUser();
 
  
}

addUsers(){
  var add1:Address = new Address("Victoria Park", "Scarborough");
  let user1 = new User("Jack Mo",add1,54,false);
  this.users.push(user1);
  
}

removeUser(){
  this.users.pop;
}

fireEvent(e){
console.log("button clicked");
}

showFunction(e){
 if(this.showText == "Show"){
 this.showText = "Hide";
this.show = false;
}
 else{
 this.showText = "Show";
this.show = true;
 }
}



}
