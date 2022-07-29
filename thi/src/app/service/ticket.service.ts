import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ticket} from '../ticket';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL + '/ticket');
  }
}
