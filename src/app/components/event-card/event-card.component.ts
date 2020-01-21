import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/classes/event';
import { EventService } from 'src/app/services/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteEventComponent } from '../modal/confirm-delete-event/confirm-delete-event.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event: Event;
  // @Output() delete: EventEmitter<Event> = new EventEmitter();

  constructor(private eventService: EventService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  // deleteEvent() {
  //   this.eventService.delete(this.event.id)
  //     .subscribe(_ => {
  //       this.delete.emit(this.event);
  //     });
  // }

  public openConfirmDeleteModal(): void {
    const modalRef = this.modalService.open(ConfirmDeleteEventComponent);

    modalRef.componentInstance.event = this.event;
  }
}
