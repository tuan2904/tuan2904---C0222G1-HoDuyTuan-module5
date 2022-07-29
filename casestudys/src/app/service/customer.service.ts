import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  addNew(todo): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, todo);
  }

  updateTodo(todo): Observable<Customer> {
    return this.http.put<Customer>(this.API_URL + '/' + todo.id, todo);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.API_URL}/${id}`);
  }
}
