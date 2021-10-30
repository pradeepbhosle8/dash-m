import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SocietiesService} from '../../../services/societies.service';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SocietiesService]
})
export class ListComponent implements AfterViewInit, OnInit {
  dtOptions: DataTables.Settings = {};
  Societies: any = [];
  
  constructor(
    private router: Router,
    private societiesService: SocietiesService,
  ) { }

  ngOnInit(): void {


   
    this.societiesService.getAllSocieties()
    .subscribe(
      (res) => {
        // console.log(res)
        this.Societies = res;
        setTimeout(()=>{
          $('#dataTables-society').DataTable({
            pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [5, 10, 25],
              responsive: true,
          })
        }, 1)
      }, error => console.log(error)
    )

  }

  ngAfterViewInit(){
   
  }

  addSociety(){
    console.log( this.router.navigate(['./societies/add']))
  
   this.router.navigate(['./societies/add'])
  }

  onDetails(item:any){
    console.log(item.society_id);
    alert(`Socierty id:  ${item.society_id}
Society Name : ${item.name}`)
  }

}
