import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'app-button',
    templateUrl : './button.component.html',
    styleUrls : ['./button.component.css']
})
export class ButtonComponent {
@Output() buttonClicked = new EventEmitter();
    buttonText:boolean=false;
    btnClick(){
        this.buttonText = !this.buttonText;
        this.buttonClicked.emit();    
    
    }
}