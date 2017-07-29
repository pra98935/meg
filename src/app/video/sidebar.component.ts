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
  categoryResultArray;
  
  constructor(private newService:ApiService, private globalVariable:SharedService) { 
    console.log("video page");
  }
  
  ngOnInit() {
    
    let self = this;
    this.newService.fetchData()
    .subscribe(
      function(response){
       self.categoryObject = response;
       console.log(self.categoryObject);
       self.categoryResultArray = self.categoryObject.result;
      }
    )
  }

  getAnchorId(event){
    let self = this;
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var idCategory = idAttr.nodeValue;
    console.log(idCategory);
    self.globalVariable.setCategoryId(idCategory);
  }

}

