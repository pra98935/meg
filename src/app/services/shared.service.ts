import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }
  
  loginUserData= [{
    "loginEmail":localStorage.getItem("email_id"),
    "loginUserId":localStorage.getItem("user_id"),
    "loginAccountType":localStorage.getItem("account_type")
  }]
}
