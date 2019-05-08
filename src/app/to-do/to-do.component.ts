import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  task;
  category = 'Select Category';
  priority = 'Select Priority';
  itemToEdit = false;
  items;
  itemList;
  user;
  filter='Filter';
  searchbox='';
  constructor(private service: TodoServiceService, private authService: AuthService, private googleAuth: AngularFireAuth) {
    this.items = service.items;
    this.googleAuth.authState.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
  }

  AddList() {
    this.service.AddList(this.task, this.category, this.priority);
    this.task = '';
    this.category = 'Select Category';
    this.priority = 'Select Priority';
  }
  changeStatus(item) {
    this.service.changeStatus(item);

  }
  modified(item){
    this.itemToEdit = !this.itemToEdit;
    this.itemList = item; 
  
  }
  Update(itemEdit) {
    this.service.editList(itemEdit,this.itemList.taskname,this.itemList.category,this.itemList.priority);
    this.itemToEdit = false;
  }
  deleteItem(item) {
    this.service.deleteItem(item);
    this.itemToEdit = false;
  }

}

