import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  test = "hello";
  msgResponse = "";
  

  constructor(private newService:ApiService) { }

  ngOnInit() {
  }

  insert(data){
      var name:string  = "";
      var email:any    = "";
      var password:any = "";
      
      //console.log(data);

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
        this.responseObject = response;
        console.log(this.responseObject);
        //this.abc = this.responseObject.message;
        //this.abc = "hello ho how";
      });

      this.msgResponse = "heelo h  ho ow";

  }



}
