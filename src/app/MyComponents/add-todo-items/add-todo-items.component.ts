import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Modules/ToDo';

@Component({
  selector: 'app-add-todo-items',
  templateUrl: './add-todo-items.component.html',
  styleUrls: ['./add-todo-items.component.css']
})
export class AddTodoItemsComponent implements OnInit {
  title:string;
  desc:string

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  onSubmit(){
    const todo ={
      sno:8,
      title: this.title,
      desc : this.desc,
      active : true
    }
    this.addTodo.emit(todo);
  }
  ngOnInit(): void {
  }

}
