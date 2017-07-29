import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './services/shared.service';

@Injectable()
export class MyguardGuard implements CanActivate {
  constructor(private globalVariable: SharedService, private router: Router) {};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.globalVariable.loginUserData && this.globalVariable.loginUserData.loginEmail){
        console.log("you are login in guard");
        return true;
      }else{
        //window.alert("You don't have permission to view this page");
        console.log("guard has been deleted");
        this.router.navigate(['/login']);
        return false;
      }
      
  }
}
