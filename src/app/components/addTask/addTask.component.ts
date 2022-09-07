import { Component, Output, EventEmitter } from "@angular/core";
import { Task } from "src/app/interfaces/task.interface";
@Component({
    selector: 'app-addTask',
    templateUrl: './addTask.component.html',
    styleUrls: ['./addTask.component.css']
})
export class AddTaskComponent {
    @Output() submitTask: EventEmitter <Task> = new EventEmitter();

    name: string = "";
    time: any;
    reminder: boolean = false;
    
    submit(){
        let task : Task = {
                name : this.name,
                time : this.time,
                reminder : this.reminder
                }
                if(task.name != "") this.submitTask.emit(task);
                else alert("Task title cannot be empty!")
                this.name = "";
                this.time = "";
                this.reminder = false;
                
        
    }

}