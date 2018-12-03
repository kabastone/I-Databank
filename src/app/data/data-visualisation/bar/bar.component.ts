import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  chart = [];
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['2007', '2008', '2009', '2010'],
        datasets: [
          {
            data: [30000, 29000, 40000, 77000],
            backgroundColor: [
              '#CA002F',
              '#0048C4',
              '#EDF343',
              '#F99500'],
            borderColor: [
              '#CA002F',
              '#0048C4',
              '#EDF343',
              '#F99500'],
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true
            }
          }],
        }
      }
    });
  }
}
