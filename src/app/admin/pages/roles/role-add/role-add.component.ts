import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesSocietyService } from 'src/app/admin/services/roles-society.service';
import {RolesSociety} from '../../../classes/roles-society';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/admin/services/notification.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
  providers: [RolesSocietyService]
})
export class RoleAddComponent implements OnInit {
  
  rolesForm: FormGroup;
  submitted = false;
  rolevalueId = null;

  constructor(
    private formBuilder: FormBuilder,
    private rolesService: RolesSocietyService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.setrolesFormValidation();
  }

  setrolesFormValidation(){
    this.rolesForm = this.formBuilder.group({
      roleName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  get f() { return this.rolesForm.controls; }

  // submit form
  onRoleSocietySubmit(){
  const roleValues = this.rolesForm.value;
  // console.log(roleValues);
  if(this.rolevalueId == null){
    this.rolesService.addRoles(roleValues)
    .subscribe(
      (res) => {
        // console.log(res);
        // console.log(this.router.navigate(['./']))
        // this.toastr.success('Add Successfully Roles!', 'Roles Added sucessuly!');
        this.notification.showSuccess('Added Successfully','Role add')
        this.router.navigate(['../'],{ relativeTo: this.route })
        
      }
    )
  } else{
    roleValues.id = this.rolevalueId;
    console.log(this.rolevalueId);
  }

  }


}
