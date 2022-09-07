import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Task } from '../../interfaces/task.interface'
import {HttpService} from '../../services/http.service';
import { Observable } from "rxjs";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent{
    @Output() delTask : EventEmitter<Task> = new EventEmitter();
    @Input() tasks : Task[] = [];
    constructor(private myServ : HttpService){}

    deleteItem(task : Task){
        this.delTask.emit(task);        
    }

}