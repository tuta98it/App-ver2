import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  template: '<canvas #pieChartCanvas></canvas>'
})
export class PieChartComponent {
  @ViewChild('pieChartCanvas', { static: true }) pieChartCanvas: ElementRef;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    // const pieChartCtx = this.pieChartCanvas.nativeElement.getContext('2d');

    // const data = {
    //   labels: ['Red', 'Blue', 'Yellow'],
    //   datasets: [{
    //     data: [10, 20, 30],
    //     backgroundColor: ['red', 'blue', 'yellow']
    //   }]
    // };

    // new Chart(pieChartCtx, {
    //   type: 'doughnut',
    //   data,
    // });

    new Chart(this.pieChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
