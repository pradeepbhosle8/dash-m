import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, Color, Colors } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {
  // bar chart 
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  // baer chart
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // bar chart
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  
  public pieChartLabels: Label[] = [['Fixed Assets'],['Investments'], ['Other Liabilites'],['Currennt Assets'],['Reserve Funds']];
  public pieChartData: number[] = [22500, 50000, 10000, 5000, 3500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(23,121,159,1)', 'rgba(63,161,79,1)', 'rgba(140,147,217,1)', '#9df98f', '#f56954'],
    },
   ];



    // Doughnut
  public doughnutChartLabels: Label[] = [['Fixed Assets'],['Investments'], ['Other Liabilites'],['Currennt Assets'],['Reserve Funds']];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 500, 800]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  

  data = [
    12000, 50000, 14000, 5000, 6000
  ]

  doughnutChartLabelsA: Label[] = ['Fixed Assets', 'Investments', 'Current Assets', 'Reserve Funds', 'Other Liabilities'];
  doughnutChartDataA: MultiDataSet = [this.data];
  doughnutChartTypeA: ChartType = 'doughnut';
  public doughnutChartLegendA = true;
  public doughnutChartColorsA = [
    {
      backgroundColor: ['rgba(23,121,159,1)', 'rgba(63,161,79,1)', 'rgba(140,147,217,1)', '#9df98f', '#f56954'],
    },
   ];
   public optionsA: any ={
    legend: {position: 'left'},
    responsive: true,
   }

   // Doughnut chart end 

  // Pie chart 
   
  pieChartOptionsB: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left'
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      
    }
  };

  pieChartLabelsB: Label[] = ['Repair- Transformer', 'AME- Lift', 'GateKeepeing', 'Security', 'Others'];

  pieChartDataB: number[] = [4555, 2511, 30000, 41000, 41200];

  pieChartTypeB: ChartType = 'pie';

  pieChartLegendB = true;

  pieChartPluginsB = [];

  pieChartColorsB = [
    {
      backgroundColor: [
        'rgba(23,121,159,1)', 'rgba(63,161,79,1)', 'rgba(140,147,217,1)', '#9df98f', '#f56954'
      ]
    }
  ];

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
      xAxes: [{}],
      yAxes: [{}]
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
      backgroundColor: '#385ed659',
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

  constructor() { }

  ngOnInit(): void {
  }

}
