import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/token-storage.service';
import { AuthserviceService } from '../services/authservice.service';

const TOKEN_HEADER_KEY = 'Authorization';  

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private token: TokenStorageService,
    private authService:  AuthserviceService,
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    // var token1 = this.token.getToken();
    let currentUser = this.authService.loggedInUserValue;
    console.log(currentUser.access_token)
    // console.log(token1)
    if(currentUser != null){
     
      authReq = request.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.access_token}`
        }
        // headers: request.headers.set(TOKEN_HEADER_KEY : `Bearer` + token)
      })
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
