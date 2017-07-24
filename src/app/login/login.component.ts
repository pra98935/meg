import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Usermodel } from '../model/usermodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseObject;
  
  login: Usermodel = new Usermodel();

  constructor(private newService:ApiService,private router: Router){}

  ngOnInit() {
    console.log(localStorage.getItem("email_id"));
    if(localStorage.getItem("email_id")){
      console.log("agian login page");
       this.router.navigate(['/user-list']);
    }
  }

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
  }

}
