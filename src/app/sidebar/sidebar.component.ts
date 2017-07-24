import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryObject;
  categoryResultObject;
  keys : any[];
  
  constructor(private newService:ApiService, private globalVariable:SharedService) { }

  ngOnInit() {
    let self = this;
    this.newService.fetchData()
    .subscribe(
      function(response){
       self.categoryObject = response;
       console.log(self.categoryObject);
       //self.categoryResultObject = self.categoryObject.result;
       self.categoryResultObject = Object.keys(self.categoryObject);
       console.log(self.categoryResultObject);
      }
    )
  }

}

