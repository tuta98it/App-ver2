import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  @ViewChild('barCanvas1', { static: false }) barCanvas1: ElementRef;
  @ViewChild('barCanvas2', { static: false }) barCanvas2: ElementRef;
  @ViewChild('barCanvas3', { static: false }) barCanvas3: ElementRef;
  barChart: any;

  constructor(
    private renderer: Renderer2,


  ) {
    setTimeout(() => this.barChartMethod(), 200);
  }

  ngOnInit() {

  }

  barChartMethod() {
    console.log(this.barCanvas1);
    this.barChart = new Chart(this.barCanvas1.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Covid', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '53', '576', '92', '504'],
            backgroundColor: 'blue',
            minBarLength: 2,
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '341', '92', '374'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '50', '538', '541', '92', '574'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        layout: {
          padding: {
            bottom: 42
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              // drawOnChartArea: false,
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              // drawOnChartArea: false
            }
          }]
        },
        maintainAspectRatio: false
      }
    });

    this.barChart = new Chart(this.barCanvas3.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Covid', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '53', '576', '92', '504'],
            backgroundColor: 'blue',
            minBarLength: 2,
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '341', '92', '374'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '50', '538', '541', '92', '574'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [{
            ticks: {
              display: true
            },
            gridLines: {
              // drawOnChartArea: false,
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              display: false,
            },
            gridLines: {
              // drawOnChartArea: false
            }
          }]
        },
        maintainAspectRatio: false
      }
    });

    this.barChart = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Tuyến giáp', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        maintainAspectRatio: false
      }
    });
    console.log(this.barChart);
    this.renderer.setProperty(this.barChart, 'width', 500);
  }
}
