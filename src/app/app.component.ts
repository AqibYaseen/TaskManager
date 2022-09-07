import { Component } from '@angular/core';
import { Task } from './interfaces/task.interface';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';
  tasks:Task[] = [];
  show: boolean = false;
  constructor (private myServ: HttpService){}
  ngOnInit() : void {
    this.myServ.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  addTask(task:Task){
    this.myServ.postTask(task).subscribe(task =>{ 
      if(task.reminder){this.tasks.unshift(task); return}
      this.tasks.push(task);
    
    });    
  }
  deleteTask(task: Task){
    this.myServ.delTasks(task).subscribe(()=> this.tasks = this.tasks.filter(t=> t.id != task.id));
  }
  showAdd(val: boolean){
    this.show = val;
  }
}
