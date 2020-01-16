import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.fetchEvent();
  }

  private fetchEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.findEvent(id).subscribe(e => this.event = e);
  }

}
