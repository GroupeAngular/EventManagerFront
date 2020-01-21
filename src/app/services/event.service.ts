import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { Event } from '../classes/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private serverUrl = 'http://localhost:8080';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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
        catchError(this.handleError<Event[]>('fetch all events'))
      );
  }

  public findAllLike(pattern: string): Observable<Event[]> {
    const url = `${this.serverUrl}/event/search/${pattern}`;

    return this.http.get<Event[]>(url)
      .pipe(
        tap(_ => console.log(`fetched all events containing ${pattern}`)),
        catchError(this.handleError<Event[]>('fetch all event like'))
      );
  }

  public createNewEvent(event: Event): Observable<any> {
    const url = `${this.serverUrl}/event`;
    
    console.log("===============" + JSON.stringify(event));
    console.log(url);
    return this.http.post<Event>(url, event, this.httpOptions)
      .pipe(
        tap(_ => console.log("create new event")),
        catchError(this.handleError<Event>('create new event'))
      );
  }

  public delete(id: number): Observable<any> {
    const url = `${this.serverUrl}/event/${id}`;

    return this.http.delete<any>(url)
      .pipe(
        tap(_ => console.log(`delete event ${id}`)),
        catchError(this.handleError<Event>('delete event'))
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
