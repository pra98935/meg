import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
    
   }

  public fetchData(): Observable<Object>{
      let headers = new Headers();
      let body = [{"method":"getAllCategory"}];
      return this.http.post('http://devpatidar.com/app/administrator/genral_apis/category_apis.php', body)
    .map(response => {
      return response.json();
    })
      .catch(this.handleError)
  }

  public getAllVideo(): Observable<Object>{
      let headers = new Headers();
      let body = [{"method":"getSubCategoryviaCategory","category_id":"0","user_id":"7"}];
      return this.http.post('http://megint.org/administrator/genral_apis/category_apis.php', body)
    .map(response => {
      return response.json();
    })
      .catch(this.handleError)
  }

  public getSingleCategoryVideo(data): Observable<Object>{
      let headers = new Headers();
      let body = data;
      return this.http.post('http://megint.org/administrator/genral_apis/category_apis.php', body)
    .map(response => {
      return response.json();
    })
      .catch(this.handleError)
  }

  public insertData(data): Observable<Object>{
    let body = data;
    return this.http.post('http://devpatidar.com/app/administrator/genral_apis/customer_apis.php', body)
    .map(response => {
      return response.json();
    })
    .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}


class Categories {
  message:string;
  result:any = new Array();
  status: number;

  constructor(tst: any){

  }
}

class Registration {
  email:string;
  password:any;
  name:any;
  constructor(){

  }
}