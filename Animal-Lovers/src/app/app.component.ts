import { MessageService } from './shared/services/message.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal-Lovers';
  color :string;

 constructor(public messageService: MessageService){}

 
}
