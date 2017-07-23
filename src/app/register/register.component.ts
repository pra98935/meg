import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    responseObject;
  constructor(private newService:ApiService) { }

  ngOnInit() { // It will work on onload
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
