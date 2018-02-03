import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#fullpage').fullpage();
  }

}
