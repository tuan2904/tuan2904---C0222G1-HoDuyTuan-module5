import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoO: Todo;
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.findAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(
      () => {
        this.findAll();
      }
    );
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.addNew(todo).subscribe(res => {
          this.findAll();
        }
      );
      this.content.reset();
    }
  }

  findAll() {
    this.todoService.getAll().subscribe(value => {
      this.todos = value;
    });
  }

}
