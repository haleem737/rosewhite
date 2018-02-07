import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
