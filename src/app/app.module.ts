import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component'
import { ButtonComponent} from './components/button/button.component'
import { TasksComponent} from './components/tasks/tasks.component'
import { TaskComponent} from './components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpService } from './services/http.service';
import { AddTaskComponent } from './components/addTask/addTask.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
