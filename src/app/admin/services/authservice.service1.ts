import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from '../classes/users';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

// const httpOptions = {

//   headers: new HttpHeaders({ 
//   'Content-Type':'application/x-www-form-urlencoded',
//   'Access-Control-Allow-Origin':'*',
//   'Access-Control-Allow-Credentials': 'true',
//   'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' })
// };
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = `${environment.apiUrl}`


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
    // console.log(this.loggedUserSubject.value);
    this.loggedInUser = this.loggedUserSubject.asObservable();

  }

  public get loggedInUserValue(): Users {
    // console.log(this.loggedUserSubject.value);
    return this.loggedUserSubject.value;
  }


  
  // login user 
  loginUser(username: string, password: string): Observable<Users> {
    // console.log(baseUrl);
    // console.log(username, password);
    debugger
    return this.http.post<Users>(baseUrl, { username, password }, httpOptions)
      .pipe(map(
        (res) => {
          debugger;
          console.log(res)
          if (res && res.data.token) {
            console.log(res.data.token);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('loggedInUser', JSON.stringify(res));
            this.loggedUserSubject.next(res);
          }
          return res;
        }
      )
      )
  }


  // Logout User
  logOutUsers() {
    localStorage.removeItem('loggedInUser');
    this.loggedUserSubject.next(null!);

  }



}
