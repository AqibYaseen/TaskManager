import { Output, Component, EventEmitter } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() showAdd: EventEmitter<boolean> = new EventEmitter(); 
    addState: boolean = false;
    buttonClicked(){
        this.addState = !this.addState;
        this.showAdd.emit(this.addState);
    }
}