import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/core/models/todo.model';

export type ITodoType = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE';
export const ITodoStatus = ['OPEN', 'PROGRESS', 'TESTING', 'DONE'];

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  @Input() type: ITodoType = 'OPEN';
  @Input() todo!: ITodo;
}
