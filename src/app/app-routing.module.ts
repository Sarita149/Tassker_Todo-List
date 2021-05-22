import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoItemsComponent } from './MyComponents/add-todo-items/add-todo-items.component';

const routes: Routes = [
  // {path:"" ,component:AddTodoItemsComponent},
  // {path:"addTodo" ,component:AddTodoItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
