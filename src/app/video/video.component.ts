import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  test = "video html file";
  responseObject;
  responseArray;
  

  categoryObject;
  categoryResultArray;

  constructor(private newService:ApiService, private globalVariable:SharedService) { }

  ngOnInit() {
    let self = this;
    
    // display all video on load
    let dataOnLoad:any = "";
    dataOnLoad = [{
            "method":"getSubCategoryviaCategory",
            "category_id":0,
            "user_id":"7"
    }]

    this.newService.getSingleCategoryVideo(dataOnLoad)
    .subscribe(function(response){
      self.responseObject = response;
      console.log(self.responseObject);
      console.log(self.responseObject["1"]);
      self.responseArray = self.responseObject["1"];
    });

    // get all category list
    this.newService.fetchData()
    .subscribe(
      function(response){
       self.categoryObject = response;
       console.log(self.categoryObject);
       self.categoryResultArray = self.categoryObject.result;
      }
    )
  }

  // get category id
  getAnchorId(event){
    let self = this;
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var idCategory = idAttr.nodeValue;
    //console.log(idCategory);
    
    let data:any = "";
    data = [{
            "method":"getSubCategoryviaCategory",
            "category_id":idCategory,
            "user_id":"7"
    }]

    this.newService.getSingleCategoryVideo(data)
    .subscribe(function(response){
      self.responseObject = response;
      console.log(self.responseObject);
      console.log(self.responseObject["1"]);
      self.responseArray = self.responseObject["1"];
    });

  }

}
