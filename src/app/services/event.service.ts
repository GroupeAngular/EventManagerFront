import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { Event } from '../classes/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public findEvent(id: number): Observable<Event> {
    return null;
  }

  public findAll(): Observable<Event[]> {
    return null;
  }

}
