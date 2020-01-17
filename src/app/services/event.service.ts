import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { Event } from '../classes/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private serverUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public findEvent(id: number): Observable<Event> {
    const url = `${this.serverUrl}/event/${id}`;
    return this.http.get<Event>(url)
      .pipe(
        tap(_ => console.log(`fetched event ${id}`)),
        catchError(this.handleError<Event>('fetch event'))
      );
  }

  public findAll(): Observable<Event[]> {
    const url = `${this.serverUrl}/event`;

    return this.http.get<Event[]>(url)
      .pipe(
        tap(_ => console.log("fetched all events")),
        catchError(this.handleError<Event[]>('fetch all event'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
