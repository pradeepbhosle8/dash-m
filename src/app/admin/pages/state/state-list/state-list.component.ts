import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateSService } from '../../../services/state-s.service';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;


@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss'],
  providers: [StateSService]
})
export class StateListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  StateSociety: any;

  constructor(
    private router: Router,
    private stateService: StateSService,
  ) { }

  ngOnInit(): void {

    this.stateService.getAllstates()
    .subscribe((res) => {
      this.StateSociety = res;

      setTimeout(()=>{
        $('#dataTables-stateSociety').DataTable({
          pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [5, 10, 25],
            responsive: true,
        })
      }, 1)

    })

  }

}
