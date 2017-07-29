import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { 
    this.setUserLocalStorage();
  }

  // get and set category id
  private catid:number;
  get getCategoryId() {
    return this.catid;
  }
  set setCategoryId(value) {
    this.catid = value;
  }
  
  loginUserData={ 
    "loginEmail":'',
    "loginUserId":'',
    "loginAccountType":""
  };

  setUserLocalStorage(){
      this.loginUserData= {
        "loginEmail":localStorage.getItem("email_id"),
        "loginUserId":localStorage.getItem("user_id"),
        "loginAccountType":localStorage.getItem("account_type")
      };
  }
  





}
