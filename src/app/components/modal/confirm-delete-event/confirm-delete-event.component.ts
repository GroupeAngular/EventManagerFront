import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/classes/event';

@Component({
  selector: 'app-confirm-delete-event',
  templateUrl: './confirm-delete-event.component.html',
  styleUrls: ['./confirm-delete-event.component.css']
})
export class ConfirmDeleteEventComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit() of modal " + JSON.stringify(event));
  }

}
