import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;

import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  providers: [UserserviceService]
})
export class UserlistComponent implements  OnInit {

  dtOptions: DataTables.Settings = {};
  useSocieti: any;
  
  
  constructor(
    private router: Router,
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.usersExcuativeAll();
  }

  usersExcuativeAll(){
    this.userService.usersSocietyExecutive()
    .subscribe((res) => {
      // console.log(res);
      this.useSocieti = res;
      setTimeout(()=>{
        $('#dataTables-usersocietyExec').DataTable({
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [5, 10, 25],
              responsive: true
        })
      },1)
    }, error => console.log(error))
  }


}
