import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesSocietyService } from 'src/app/admin/services/roles-society.service';
import {RolesSociety} from '../../../classes/roles-society';
import { NotificationService } from 'src/app/admin/services/notification.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
  providers: [RolesSocietyService]
})
export class RoleEditComponent implements OnInit {

  rolesEditForm: FormGroup;
  id!: number;
  isAddMode!: boolean;
  rolevalueId = null;

  constructor(
    private formBuilder: FormBuilder,
    private rolesService: RolesSocietyService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    
    this.setrolesFormValidation();

    if (!this.isAddMode) {
      this.rolesService.getRolesId(this.id)
      .subscribe(
        (res) => {
          this.id = res.id;
          this.rolesEditForm.controls['roleName'].setValue(res.roleName);
          this.rolesEditForm.controls['description'].setValue(res.description)
        }
      )    
  }
  }

  setrolesFormValidation(){
    this.rolesEditForm = this.formBuilder.group({
      roleName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  get f() { return this.rolesEditForm.controls; }

  onRoleSocietyEditSubmit(){
    // console.log('Working');
    this.rolesService.editRoles(this.id, this.rolesEditForm.value)
    .subscribe(
      (res) =>{
        // console.log(res);
        this.notification.showSuccess('Update Roles', 'Update Roles Sucessfully');
        this.router.navigate(['../../'],{ relativeTo: this.route })
      }
    )
   
  }


}
