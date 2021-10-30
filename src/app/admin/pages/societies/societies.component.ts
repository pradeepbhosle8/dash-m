import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { slideInAnimation } from '../app-animation';




@Component({
  selector: 'app-societies',
  templateUrl: './societies.component.html',
  styleUrls: ['./societies.component.scss'],
  animations: [ slideInAnimation ]
  
})
export class SocietiesComponent implements AfterViewInit,  OnInit {
  

 
  

  // Societies: [] = [];
  constructor(
  ) { }

  ngOnInit(): void {

    
  }

  ngAfterViewInit(){
    
  }





}
