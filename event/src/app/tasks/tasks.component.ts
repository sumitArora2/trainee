import { Component, OnInit } from '@angular/core';
import {Tasks} from './task';
import {TASKS} from './tasks-list';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  task: Tasks={
    name:'Task 1',
    flag:true
  }
  name1;
  addFlag=false;
  tasks=TASKS;

  constructor() {}
  flag=false;
  num;
  ngOnInit() {
  }
   change(i){
    this.flag=true;
    this.num=i;

  }
  hideButton(){
    this.flag=false;
  }
  hide(i){
   
    this.tasks[i].flag=false;
 
  }
 
  add(){
    this.addFlag=true;
  }
  addNew(){
    this.task={name:this.name1,flag:true};
    alert("successfully added");
    this.addFlag=false;
    this.tasks.push(this.task);

  }
}
