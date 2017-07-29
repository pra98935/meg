import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DoCheck } from '@angular/core';

import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,private newService:ApiService, private globalVariable:SharedService) { }
  // bindEmail;
  // ngDoCheck() {
  //   this.bindEmail = '';
  // }

  ngOnInit() {
    console.log("you are successfully logout");
    localStorage.clear();
    this.globalVariable.loginUserData = null;
    this.router.navigate(['/login']);
  }

}
