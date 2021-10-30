import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Expensecategory} from '../classes/expensecategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensecategoryService {
   // local json server use
  //  expenceCategoryLink= 'http://localhost:3000/expense_categories';

  constructor(
    private httpService: HttpClient
  ) { }


  //Get All Societies
  // getAllexpenceCategory(): Observable<Expensecategory>{
  //   return this.httpService.get<Expensecategory>(this.expenceCategoryLink);
  // }


}
