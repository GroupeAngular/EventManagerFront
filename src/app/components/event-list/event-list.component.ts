import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents(): void {
    this.eventService.findAll()
      .subscribe(events => this.events = events);
  }

}
