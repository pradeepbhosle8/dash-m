import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthserviceService
) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      const currentUser = this.authenticationService.loggedInUserValue;
      if(currentUser){
        return true;
        
      }
    this.router.navigate(['/login'])  
    return false;
  }
  
}
