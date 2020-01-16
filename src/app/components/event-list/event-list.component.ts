import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  events: Event[];

  constructor() { }

  ngOnInit() {
  }

}
