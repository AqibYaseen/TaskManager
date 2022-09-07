import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "src/app/interfaces/task.interface";
@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task:any;
    @Output() deleteItem : EventEmitter<Task> = new EventEmitter();
    
    delItem(task: Task){
        this.deleteItem.emit(task);
        
    }
    
    
}
