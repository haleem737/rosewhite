import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    //destroying
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }

    //initializing 
      $('#fullpage').fullpage();
    }

}
