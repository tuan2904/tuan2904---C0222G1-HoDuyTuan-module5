import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ticket} from '../ticket';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL + '/list');
  }

  delete(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(this.API_URL + '/delete/' + id);
  }
  order(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(this.API_URL + `/order`, ticket);
  }
  searchByDestination(go: string) {
    return this.http.get<Ticket[]>(this.API_URL + `/search/` + go);
  }
  addNew(xe): Observable<Ticket> {
    return this.http.post<Ticket>(this.API_URL + '/add/', xe);
  }
}
