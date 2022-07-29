import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Xe} from '../xe';
import {IStudent} from '../istudent';
import {IClass} from '../iclass';
import {Ve} from '../ve';

@Injectable({
  providedIn: 'root'
})
export class XeService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Xe[]> {
    return this.http.get<Xe[]>(this.API_URL + '/ve');
  }

  addNew(xe): Observable<Xe> {
    return this.http.post<Xe>(this.API_URL + '/ve/', xe);
  }

  getList(): Observable<Ve[]> {
    return this.http.get<Ve[]>(this.API_URL + '/xe');
  }
}
