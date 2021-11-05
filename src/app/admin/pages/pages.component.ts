import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { slideInAnimation } from './app-animation';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [ slideInAnimation ]
})
export class PagesComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    var token = localStorage.getItem('loggedInUser');
    // console.log(token)
    if(!token){
          // this.router.navigate(['/login'],{ relativeTo: this.route })  
          // console.log('token undefined');
    }else if(token){
      // console.log('token defined');
      // this.router.navigate(['/msociety/'],{ relativeTo: this.route })
    }
  }

}
