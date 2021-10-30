import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitysService } from '../../../services/citys.service';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
  providers: [CitysService]
})
export class CityListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  CitySociety: any;

  constructor(
    private router: Router,
    private cityService: CitysService,
  ) { }

  ngOnInit(): void {
    this.cityService.getAllcity()
    .subscribe((res) => {
      this.CitySociety = res;

      setTimeout(() => {
        $('#dataTables-citySociety').DataTable({
          pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [5, 10, 25],
            responsive: true,
        })
      },1)

    })
  }

}
