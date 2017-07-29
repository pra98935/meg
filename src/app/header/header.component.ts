import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck  {
  bindEmail;
  constructor(private globalVariable:SharedService) { }

  ngDoCheck() {
    if(this.globalVariable.loginUserData && this.globalVariable.loginUserData.loginEmail){
      this.bindEmail = this.globalVariable.loginUserData.loginEmail;
    }else{
      this.bindEmail = null;
    }
  }

  ngOnInit() {
    
  }

}
