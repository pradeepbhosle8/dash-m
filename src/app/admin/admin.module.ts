
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShareComponent } from './share/share.component';
import { DheaderComponent } from './share/dheader/dheader.component';
import { DfooterComponent } from './share/dfooter/dfooter.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { BreadcrumbComponent } from './share/breadcrumb/breadcrumb.component';
import { PagesComponent } from './pages/pages.component';
import { SocietiesComponent } from './pages/societies/societies.component';
import { UsersComponent } from './pages/users/users.component';
import { ExpenseCategoriesComponent } from './pages/expense-categories/expense-categories.component';
import { ServicesCategoriesComponent } from './pages/services-categories/services-categories.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ViewTaxComponent } from './pages/view-tax/view-tax.component';
import { ActivityLogsComponent } from './pages/activity-logs/activity-logs.component';
import { EnrolmentRequestsComponent } from './pages/enrolment-requests/enrolment-requests.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
// import external modules 
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AddComponent } from './pages/societies/add/add.component';
import { ListComponent } from './pages/societies/list/list.component';
import { UseraddComponent } from './pages/users/useradd/useradd.component';
import { UserlistComponent } from './pages/users/userlist/userlist.component';
import { ExcaListComponent } from './pages/expense-categories/exca-list/exca-list.component';
import { ExcaAddComponent } from './pages/expense-categories/exca-add/exca-add.component';
import { ExcaEditComponent } from './pages/expense-categories/exca-edit/exca-edit.component';
import { RoleListComponent } from './pages/roles/role-list/role-list.component';
import { RoleAddComponent } from './pages/roles/role-add/role-add.component';
import { RoleEditComponent } from './pages/roles/role-edit/role-edit.component';
import { StateComponent } from './pages/state/state.component';
import { StateListComponent } from './pages/state/state-list/state-list.component';
import { StateAddComponent } from './pages/state/state-add/state-add.component';
import { StateEditComponent } from './pages/state/state-edit/state-edit.component';
import { CityComponent } from './pages/city/city.component';
import { CityListComponent } from './pages/city/city-list/city-list.component';
import { CityAddComponent } from './pages/city/city-add/city-add.component';
import { CityEditComponent } from './pages/city/city-edit/city-edit.component';
import { EnrReqListComponent } from './pages/enrolment-requests/enr-req-list/enr-req-list.component';

import { ToastrModule } from 'ngx-toastr';
import {authInterceptorProviders} from './helper/auth.interceptor';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';

import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TableModule } from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [AdminComponent, 
                 AuthComponent, 
                 LoginComponent, 
                 RegisterComponent,
                 DashboardComponent, 
                 ShareComponent, 
                 DheaderComponent, 
                 DfooterComponent, 
                 SidebarComponent, 
                 BreadcrumbComponent, 
                 PagesComponent, 
                 SocietiesComponent, 
                 UsersComponent, 
                 ExpenseCategoriesComponent, 
                 ServicesCategoriesComponent, 
                 RolesComponent, 
                 ViewTaxComponent, 
                 ActivityLogsComponent, 
                 EnrolmentRequestsComponent, 
                 AddComponent, 
                 ListComponent, 
                 UseraddComponent, 
                 UserlistComponent, 
                 ExcaListComponent, 
                 ExcaAddComponent, 
                 ExcaEditComponent, 
                 RoleListComponent, 
                 RoleAddComponent, 
                 RoleEditComponent, 
                 StateComponent, 
                 StateListComponent, 
                 StateAddComponent, 
                 StateEditComponent, 
                 CityComponent, 
                 CityListComponent, 
                 CityAddComponent, 
                 CityEditComponent, 
                 EnrReqListComponent, 
                 ChartjsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    TableModule,
    MultiSelectModule,
     ToastrModule.forRoot(),
     NgCircleProgressModule.forRoot({}) 
    
     
  ],
  exports: [
    // MatFormFieldModule
   
  ],
  providers: [authInterceptorProviders]
})
export class AdminModule { }
