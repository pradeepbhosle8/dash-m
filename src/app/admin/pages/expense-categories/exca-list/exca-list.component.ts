import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensecategoryService } from '../../../services/expensecategory.service';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;

@Component({
  selector: 'app-exca-list',
  templateUrl: './exca-list.component.html',
  styleUrls: ['./exca-list.component.scss'],
  providers: [ExpensecategoryService]
})
export class ExcaListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  expenceCategory: any;

  constructor(
    private router: Router,
    private expenceCategoryService: ExpensecategoryService ,
  ) { }

  ngOnInit(): void {

    // this.expenceCategoryService.getAllexpenceCategory()
    // .subscribe((res) => {
    //   this.expenceCategory = res;

    //   setTimeout(()=>{
    //     $('#dataTables-expenceCategory').DataTable({
    //       pagingType: 'full_numbers',
    //         pageLength: 5,
    //         processing: true,
    //         lengthMenu: [5, 10, 25],
    //         responsive: true,
    //     })
    //   }, 1)
    // }, error => console.log(error))
  }

}
