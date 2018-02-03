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
    $('#fullpage').fullpage();
  }

}
