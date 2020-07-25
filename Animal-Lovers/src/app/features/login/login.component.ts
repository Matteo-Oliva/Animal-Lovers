import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
	password: string;
	invalidLogin: boolean;

  // userid = ''
  // password = ''
  // autenticato = true
  // consentito = false
  // errorMessage = 'Nome utente o password non vailda!'
  //loginMessage = 'Accesso in corso' 

  constructor(private route : Router , private authenticationService:AuthenticationService ) { }  //Code Injection

  ngOnInit(): void {
    this.authenticationService.isLogged$().subscribe( result => {
      result ? this.route.navigate( ['/dashboard']) : this.invalidLogin = true;
    })
  }
  login(): void {
		this.authenticationService.login( this.username, this.password );
	}

	cancel(): void {
		this.route.navigate( [ '/dashboard' ] );
	}
}

  // autControl():void {

  //   if(this.userid === 'Matteo' && this.password === 'Oliva'){
  //     this.autenticato = true;
  //     this.route.navigate(['welcome', this.userid]);
  //     this.consentito = true;
  //   }
  //   else {
  //     this.route.navigate(['login']);
  //     this.autenticato = false;
  //     this.consentito = false;
  //   }

    
  

