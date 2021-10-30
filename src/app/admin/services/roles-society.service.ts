import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {RolesSociety} from '../classes/roles-society';
import { Observable } from 'rxjs';
import { RolesComponent } from '../pages/roles/roles.component';


@Injectable({
  providedIn: 'root'
})
export class RolesSocietyService {

  roleSocietyLink= 'http://localhost:3000/roles';


  constructor(
    private httpService: HttpClient
  ) { }


   //Get All Societies
   getAllroles(): Observable<RolesSociety>{
    return this.httpService.get<RolesSociety>(this.roleSocietyLink);
  }

  // get single role
  getRolesId(id: number): Observable<RolesSociety>{
    return this.httpService.get<RolesSociety>(`http://localhost:3000/roles/${id}`)

  }


  // add roles 
  addRoles(roles: RolesSociety): Observable<RolesSociety>{
    return this.httpService.post<RolesSociety>('http://localhost:3000/roles', roles)

  }

  // Edit Roles
  editRoles(id: number, params: any){
    return this.httpService.put(`http://localhost:3000/roles/${id}`, params)
  }

  // delete Roles
  deleteRoles(id:any){
    return this.httpService.delete(`http://localhost:3000/roles/${id}`);
  }

}
