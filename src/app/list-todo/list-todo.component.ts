import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id:number,
    public username:string,
    public desc:string,
    public targetDate:Date,
    public status:boolean
  ){

  }
}


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos:Todo[]

  constructor(private getListdata:WelcomeDataService,private operation:CrudService,private router:Router) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(){
    let user = sessionStorage.getItem('logedInUser');
    console.log(user)
    this.getListdata.getUserTodoList(user).subscribe(
      res=>{
       this.todos = res
      }
    )
  }

  createNewTodo(){
    console.log('create new todo');
    this.router.navigate(['createNewTodo']);
  }

  deleteTodo(id){
    let user = sessionStorage.getItem('logedInUser');
    console.log('hit')
    this.operation.delete(user,id).subscribe(
      res=>{
        this.getTodos()
      }
    )
  }

  updateTodo(id){
    console.log('my id',id);
    this.router.navigate(['updateTodo',id])
  }


}
