import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {City} from '../classes/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitysService {

  CityLink= 'http://localhost:3000/city';

  constructor(
    private httpService: HttpClient
  ) { }

   //Get All city
   getAllcity(): Observable<City>{
    return this.httpService.get<City>(this.CityLink);
  }


}
