import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './helper/auth.guard';
import { ActivityLogsComponent } from './pages/activity-logs/activity-logs.component';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { CityListComponent } from './pages/city/city-list/city-list.component';
import { CityComponent } from './pages/city/city.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnrReqListComponent } from './pages/enrolment-requests/enr-req-list/enr-req-list.component';
import { EnrolmentRequestsComponent } from './pages/enrolment-requests/enrolment-requests.component';
import { ExcaListComponent } from './pages/expense-categories/exca-list/exca-list.component';
import { ExpenseCategoriesComponent } from './pages/expense-categories/expense-categories.component';
import { MasterComponent } from './pages/master/master.component';
import { PagesComponent } from './pages/pages.component';
import { RoleAddComponent } from './pages/roles/role-add/role-add.component';
import { RoleEditComponent } from './pages/roles/role-edit/role-edit.component';
import { RoleListComponent } from './pages/roles/role-list/role-list.component';
import { RolesComponent } from './pages/roles/roles.component';
import { AddComponent } from './pages/societies/add/add.component';
import { ListComponent } from './pages/societies/list/list.component';
import { SocietiesComponent } from './pages/societies/societies.component';
import { StateListComponent } from './pages/state/state-list/state-list.component';
import { StateComponent } from './pages/state/state.component';
import { UseraddComponent } from './pages/users/useradd/useradd.component';
import { UserlistComponent } from './pages/users/userlist/userlist.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component: AdminComponent,

  //   children: [
  //     {
  //       path:'',
  //       component: LoginComponent
  //     }
      
  //   ]
  // },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'enroll',
    component: RegisterComponent
  },
  {
    path: '',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path:'master',
        component: MasterComponent
      },
      
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path: 'societies',
        component: SocietiesComponent,
        children:[
          {
            path: '',
            component: ListComponent
          },
          {
            path: 'add',
            component: AddComponent
          }
        ]
      },
      {
        path:'users',
        component: UsersComponent,
        children: [
         {
           path: '',
           component: UserlistComponent
         },
         {
           path:'addUser',
           component: UseraddComponent
         }
        ]
      },
      {
        path: 'expense_categories',
        component: ExpenseCategoriesComponent,
        children: [
          {
            path:'',
            component: ExcaListComponent
          }
        ]
      },
      {
        path: 'roles',
        component: RolesComponent,
        children: [
          {
            path: '',
            component: RoleListComponent
          },
          {
            path: 'add',
            component: RoleAddComponent
          },
          {
            path: 'edit/:id',
            component: RoleEditComponent
          }
        ]
      },
      {
        path: 'state',
        component: StateComponent,
        children: [
          {
            path: '',
            component: StateListComponent
          }
        ]

      },
      {
        path: 'city',
        component: CityComponent,
        children: [
          {
            path: '',
            component : CityListComponent
          }
        ]
      },
      {
        path:'enrolment_requests',
        component: EnrolmentRequestsComponent,
        children: [
          {
            path: '',
            component: EnrReqListComponent
          }
        ]
      },
      {
        path:'activity_logs',
        component: ActivityLogsComponent
      },
      {
        path: 'cahrtjs',
        component: ChartjsComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
