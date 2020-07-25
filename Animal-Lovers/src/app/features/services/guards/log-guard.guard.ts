import { AuthenticationService } from './../authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogGuardGuard implements CanActivate{

  constructor(private authenticationService:AuthenticationService,private route:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authCheck();
  }
  
  private authCheck():boolean | UrlTree{
    if(this.authenticationService.isLogged()){
      return true;
    }
      return this.route.parseUrl('/dashboard');
    }
  }
  
  

