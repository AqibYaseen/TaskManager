import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../interfaces/task.interface";

const httpOptions = {
    headers : new HttpHeaders({
    'Content-Type': 'application/json'
})
}

@Injectable()
export class HttpService {
    url: string = 'http://localhost:4000/tasks';
    
    
    constructor (private http: HttpClient){}
    
    getTasks(): Observable<Task[]>{
       return this.http.get<Task[]>(this.url);
    }

    delTasks(task:Task):Observable<Task>{
        const url = `${this.url}/${task.id}`;
        return this.http.delete<Task>(url);
    }

    postTask(task: Task): Observable<Task>{
        return this.http.post<Task>(this.url,task,httpOptions);
    }
    updateTask(task: Task){
        const url = `${this.url}/${task.id}`;
        return this.http.put(url,task,httpOptions);
    }

}