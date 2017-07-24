import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  responseObject;
  
  constructor(private newService:ApiService, private globalVariable:SharedService) { }

  ngOnInit() { // It will work on onload
    console.log(this.globalVariable.loginUserData);
    console.log(this.globalVariable.loginUserData[0].loginEmail);
  }

  insert(data){
      let name:string  = "";
      let email:any    = "";
      let password:any = "";
      let self = this;
      
      name     = data.name;
      email    = data.email;
      password = data.password;

      data = [{
        "method":"addUsers",
        "name":name,
        "email_id":email,
        "password":password,
        "device_id":"0",
        "lang_type":"EN",
        "location":"Indore",
        "latitude":"00.000",
        "longitude":"00.000"
      }]

      this.newService.insertData(data)
      .subscribe(function(response){
        self.responseObject = response;
      });
  }
}
