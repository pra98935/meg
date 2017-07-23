import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ApiService} from '../api.service';
import { Usermodel } from '../model/usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseObject;
  
  login: Usermodel = new Usermodel();

  constructor(private newService:ApiService){}

  ngOnInit() {
    // this.newService.fetchData()
    // .subscribe(function(t){
    //   console.log(t);
    //   });
  }

  // addContact(){
  //   console.log("submit form");
  //   var submit = "form sumit";
  //   return submit;
  // }

  insert(){
    let self = this;
    let data:any = "";
    let email = this.login.email;
    let password = this.login.password;
    data = [{
              "method":"login",
              "email_id":email,
              "password":password
           }]  
    this.newService.insertData(data)
    .subscribe(function(response){
      self.responseObject = response;
      console.log(self.responseObject);
      
      if (typeof(Storage) !== "undefined" && self.responseObject.result.user_id) {
          localStorage.setItem("account_type", self.responseObject.result.account_type);
          localStorage.setItem("email_id", self.responseObject.result.email_id);
          localStorage.setItem("user_id", self.responseObject.result.user_id);
      }

    });
    
    //console.log(this.login);
    //console.log(this.login.email);
  }

}
