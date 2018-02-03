import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.test').css('background-color', '#661266');
  }

}
