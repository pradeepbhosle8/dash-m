import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../classes/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userLink = "http://localhost:3000/societyUsers";

  constructor(
    private httpService: HttpClient,
  ) { }


  // get all users society Executives
  usersSocietyExecutive(): Observable<User>{
    return this.httpService.get<User>(this.userLink);

  }

}
