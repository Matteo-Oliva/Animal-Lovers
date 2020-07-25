import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from './features/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal-Lovers';
  

}
