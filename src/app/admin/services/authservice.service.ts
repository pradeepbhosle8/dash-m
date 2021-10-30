import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../classes/users';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {

  headers: new HttpHeaders({ 
  'Content-Type':'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' })
};

// const baseUrl = `${environment.apiUrl}`


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public baseUrl = 'http://localhost:8000/auth/login';
  // public baseUrl = 'https://testing.paynet.co.in/msociety_lv/public/index.php/api/v3/auth/login';
  private loggedUserSubject: BehaviorSubject<Users>;
  public loggedInUser: Observable<Users>;



  constructor(
    private http: HttpClient,
   
  ) {
    this.loggedUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('loggedInUser') || '{}'));
    // console.log(this.loggedUserSubject);
    this.loggedInUser = this.loggedUserSubject.asObservable();
    // console.log(this.loggedInUser);
   
   }

   public get loggedInUserValue(): Users {
    return this.loggedUserSubject.value;
  }



  // login user 
  loginUser(email: string, password: string): Observable<Users> {
    // /api/v3/auth/login
    return this.http.post<Users>(this.baseUrl, { email, password })
      .pipe(map(
        (res) => {
          console.log(res, res.access_token)
          if(res && res.access_token){
              console.log(res);
             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('loggedInUser', JSON.stringify(res));
             this.loggedUserSubject.next(res);
          }

          // localStorage.setItem('loggedInUser', JSON.stringify(res));
          // this.loggedUserSubject.next(res);
          // console.log( this.loggedUserSubject.next(res));
          return res;
        }
      ))
  }


  // Logout User
  logOutUsers(){
    localStorage.removeItem('loggedInUser');
    this.loggedUserSubject.next(null!);

  }



}
