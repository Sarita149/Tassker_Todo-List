import { Component, OnInit } from '@angular/core';
import { logging } from 'selenium-webdriver';
import { Todo } from 'src/app/Modules/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  AddItems = false;
  localItem :string;

  addToDoItem() {
    this.AddItems = !this.AddItems;
  }
  constructor() {
   this.localItem = localStorage.getItem("Todos");
   if(this.localItem === null){
     this.todos = [
       {
         sno: 1,
         title: "This is Title",
         desc: "Description",
         active: true
       }
     ]
   }
   else{
     this.todos = JSON.parse(this.localItem);
   }
  }

  ngOnInit(): void {
  }

  DeleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    console.log(this.todos);
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }

  checkboxToggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }
}
