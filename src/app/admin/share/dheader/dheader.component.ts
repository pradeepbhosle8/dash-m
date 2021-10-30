import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../services/authservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dheader',
  templateUrl: './dheader.component.html',
  styleUrls: ['./dheader.component.scss']
})
export class DheaderComponent implements OnInit {
  loggedUserSubject: any;
  currentDate = new Date();

  constructor(
    private authservice: AuthserviceService,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authservice.logOutUsers();
    this.router.navigate(['/login']);
    // this.loggedUserSubject.next(null!);
  }
}
