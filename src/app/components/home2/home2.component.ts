import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.parallax').parallax();
				$('#va-accordion').vaccordion({
          expandedHeight	: 350,
          accordionH		: $(window).height(),
          accordionW		: $('#main-left-wrapper').width(),
					animSpeed		: 400,
					animOpacity		: 0.7,
					visibleSlices	: 1
        });
        

  }

}
