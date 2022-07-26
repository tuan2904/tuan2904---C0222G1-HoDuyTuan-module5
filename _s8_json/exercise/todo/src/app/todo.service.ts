import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  addNew(todo): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }

  updateTodo(todo): Observable<Todo> {
    return this.http.put<Todo>(this.API_URL + '/' + todo.id, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.API_URL}/${id}`);
  }
}
