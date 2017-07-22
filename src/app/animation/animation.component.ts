import { Component, OnInit,
  trigger,
  state,
  transition,
  animate,
  keyframes,
  style
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
  
    trigger('focusPanel',[
      state('inactive', style({
        transform:'scale(1)',
        backgroundColor: '#eeeeee'
      })),
      state('active', style({
        transform:'scale(1.1)',
        backgroundColor: '#cfd8dc'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-in'))
    ]),

    // trigger('movePanel',[
     
    //   transition('void=>*', [
    //     style({transform: 'translateY(-100%)'}),
    //      animate(100) 
    //   ])
      
    // ]),
    
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  state:string="inactive";
  toggleMove(){
    //console.log("button has been clicked");
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  ngOnInit() {
  }

}
