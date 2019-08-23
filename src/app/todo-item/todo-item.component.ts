import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../models/todoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: ToDoItem = new ToDoItem();

  constructor() { }

  ngOnInit() {}

}
