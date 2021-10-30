import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EnrollmentrequestsService } from '../../../services/enrollmentrequests.service';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;


@Component({
  selector: 'app-enr-req-list',
  templateUrl: './enr-req-list.component.html',
  styleUrls: ['./enr-req-list.component.scss'],
  // providers: [EnrollmentrequestsService]
})
export class EnrReqListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  enrollmentrequests: any;

  constructor(
    private router: Router,
    // private enrollmentService: EnrollmentrequestsService,
  ) { }

  ngOnInit(): void {
    // this.enrollmentService.getAllEnrollmentrequests()
    // .subscribe((res) => {
    //   this.enrollmentrequests = res;

    //   setTimeout(()=>{
    //     $('#dataTables-enrollmentrequests').DataTable({
    //       pagingType: 'full_numbers',
    //         pageLength: 5,
    //         processing: true,
    //         lengthMenu: [5, 10, 25],
    //         responsive: true,
    //     })
    //   }, 1)

    // })
  }

}
