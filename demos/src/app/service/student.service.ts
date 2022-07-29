import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {IStudent} from '../istudent';
import {IClass} from '../iclass';
import {Xe} from '../xe';
import {Ve} from '../ve';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  dataSearchChannel = new BehaviorSubject<any>();
  channelSearch = this.dataSearchChannel.asObservable();
  // @ts-ignore
  data = new BehaviorSubject<IStudent>();
  obserData = this.data.asObservable();

  studentSearch(students: IStudent[]) {
    this.dataSearchChannel.next(students);
  }

  getList(): Observable<Ve[]> {
    return this.http.get<Ve[]>(this.API_URL + '/list-car');
  }

  getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.API_URL + '/list');
  }

  getAllClass(): Observable<IClass[]> {
    return this.http.get<IClass[]>(this.API_URL + '/xe');
  }

  addNew(xe): Observable<IStudent> {
    return this.http.post<IStudent>(this.API_URL + '/add/', xe);
  }

  // @ts-ignore
  getListClass(): Observable<Class[]> {
    return this.http.get<IClass[]>(this.API_URL + '/xe');
  }

  delete(id: number): Observable<IStudent> {
    return this.http.delete<IStudent>(this.API_URL + '/ve/' + id);
  }

  searchByName(key: string) {
    return this.http.get<IStudent[]>(this.API_URL + '/ve?di_like=' + key);
  }

  findById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(this.API_URL + '/ve/' + id);
  }

  getDataEditFromList(students: IStudent) {
    this.data.next(students);
  }

  updateCustomer(customer): Observable<IStudent> {
    return this.http.put<IStudent>(this.API_URL + '/ve/' + customer.id, customer);
  }

  updateStudent(id: number, customer: IStudent): Observable<IStudent> {
    return this.http.patch<IStudent>(this.API_URL + '/ve/' + id, customer);

  }
}
