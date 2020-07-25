import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogged$: Subject<boolean>;

  
	constructor(
		public authenticationService: AuthenticationService) {
	}


	ngOnInit(): void {
		this.isLogged$ = this.authenticationService.isLogged$();
	}
}
