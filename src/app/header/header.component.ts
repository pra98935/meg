import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bindEmail;
  constructor(private globalVariable:SharedService) { }

  ngOnInit() {
    this.bindEmail = this.globalVariable.loginUserData[0].loginEmail;
  }

}
