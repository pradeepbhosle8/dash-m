import {Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, Color, Colors } from 'ng2-charts';
// declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements  OnInit {

 // line chart
 public lineChartData: ChartDataSets[] = [
  { data: [55, 40, 100, 235, 500, 800, 20], label: 'society collection' },
  // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
];
public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions: (ChartOptions & { annotation: any }) = {
  responsive: true,
  
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    xAxes: [{
      gridLines: {
          color: "rgba(0, 0, 0, 0)",
      }}],
    yAxes: [{gridLines: {
      color: "rgba(0, 0, 0, 0)",
  }}]
  },
  annotation: {
    annotations: [
      {
        type: 'line',
        mode: 'vertical',
        scaleID: 'x-axis-0',
        value: 'March',
        borderColor: 'orange',
        borderWidth: 2,
        label: {
          enabled: true,
          fontColor: 'orange',
          content: 'LineAnno'
        }
      },
    ],
  },
};
public lineChartColors: Color[] = [
  { // grey
    backgroundColor: '#fff',
    borderColor: '#385ed6',
    pointBackgroundColor: '#28a745',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // red
    backgroundColor: 'rgba(255,0,0,0.3)',
    borderColor: 'red',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend = true;
public lineChartType: ChartType = 'line';
// public lineChartPlugins = [pluginAnnotations];


  constructor(
   
  ) { }

  ngOnInit(): void {
   


  }

   
 

}
