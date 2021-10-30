import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesSocietyService } from '../../../services/roles-society.service';
import { DataTableDirective } from 'angular-datatables';
declare var $: any;
import { NotificationService } from 'src/app/admin/services/notification.service';



@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  providers: [RolesSocietyService]
})
export class RoleListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  roleSociety: any;


  constructor(
    private router: Router,
    private roleService: RolesSocietyService,
   private route: ActivatedRoute,
   private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.getRolesData();
   
  }

  getRolesData(){
    this.roleService.getAllroles()
    .subscribe((res) => {
      this.roleSociety = res;

      setTimeout(() => {
        $('#dataTables-roleSociety').DataTable({
          pagingType: 'full_numbers',
          processing: true,
          lengthMenu: [5, 10, 25],
          // lengthMenu: [[5, 10, 25, ], [5, 10, 25, "All"]],
          responsive: true,
          retrieve: true,
          deferLoading: 57,
          pageLength: 5,
          
        })
      }, 1)

    }, error => console.log(error)
    )
  }


  deleteRole(id: number) {
    // console.log('Delete Role Working');
    if(confirm('Are You Sure to delete this ' + id)){
      this.roleService.deleteRoles(id)
      .subscribe(
        (res) => {
          this.notification.showSuccess(' Delete Successfully ', `This ${id} is delete `);
          this.getRolesData();
         
        }
      )
    }
  }



}
