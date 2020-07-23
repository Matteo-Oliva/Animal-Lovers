import { MessageService } from './shared/services/message.service';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLogAction]'
})
export class LogDirective {

 @Input('appLogAction') action : string;
 
  
  

  constructor(public messageService:MessageService ) { }

  @HostListener('click') onclick() {
    console.log(`Azione triggerata : ${this.action}`);
    this.messageService.add(`${this.action}`);

  }
   
  }
