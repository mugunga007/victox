import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo : Todo[];
  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit() {
this.todoService.getTodo().subscribe(todos =>
  this.todo = todos);
  }

}
