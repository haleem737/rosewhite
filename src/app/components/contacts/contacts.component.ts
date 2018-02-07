import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    //destroying
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    }

    //initializing 
      $('#fullpage').fullpage();

      $('.bg-map').css('width', $(window).width());
      $('.bg-map').css('height', $(window).height());
    }
  
}
