import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  titke = "submit";

  constructor(private newService:ApiService){}

  ngOnInit() {
    this.newService.fetchData()
    .subscribe(function(t){
      console.log(t);
      });
  }

  addContact(){
    console.log("submit form");
    var submit = "form sumit";
    return submit;
  }

}
