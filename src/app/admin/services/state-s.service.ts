import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {State} from '../classes/state';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateSService {

  stateLink= 'http://localhost:3000/state';

  constructor(
    private httpService: HttpClient
  ) { }

   //Get All Societies
   getAllstates(): Observable<State>{
    return this.httpService.get<State>(this.stateLink);
  }


}
