import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/classes/event';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  searchResult: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.searchResult = [];
  }

  onSearchChange(pattern: string): void {
    this.eventService.findAllLike(pattern)
      .subscribe(events => this.searchResult = events);
  }

}
