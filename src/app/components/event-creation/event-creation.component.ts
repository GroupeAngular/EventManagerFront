import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  model: Event = new Event();

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.eventService.createNewEvent(this.model)
      .subscribe(event => {
        console.log("New event created : " + JSON.stringify(event));
        this.router.navigateByUrl('/');
      });
  }

}
