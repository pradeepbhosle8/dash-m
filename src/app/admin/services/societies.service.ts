import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Societies} from '../classes/societies';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SocietiesService {

  public baseUrl = 'http://localhost:3000/societies';

  constructor(
    private httpService: HttpClient
  ) { }

    // get all societies
    getAllSocieties(): Observable<Societies>{
      return this.httpService.get<Societies>(this.baseUrl, httpOptions )
    }

}
