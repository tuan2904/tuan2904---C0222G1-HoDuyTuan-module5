import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Ve} from '../ve';
import {Xe} from '../xe';

@Injectable({
  providedIn: 'root'
})
export class XeService {
  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Xe[]> {
    return this.http.get<Xe[]>(this.API_URL + '/ve');
  }

  // addNew(xe): Observable<Xe> {
  //   return this.http.post<Xe>(this.API_URL + '/add/', xe);
  // }

  getList(): Observable<Ve[]> {
    return this.http.get<Ve[]>(this.API_URL + '/xe');
  }
}
