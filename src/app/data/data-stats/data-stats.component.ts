import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {Data} from '../data';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-data-stats',
  templateUrl: './data-stats.component.html',
  styleUrls: ['./data-stats.component.css']
})
export class DataStatsComponent implements OnInit, AfterViewInit {
  data: Data[];
  month = [];
  price = [];
  chart = [];
  chart2 = [];
  stats = [];
  score = [];

  @ViewChild('canvas')  canvas: ElementRef;
  @ViewChild('canvas2')  canvas2: ElementRef;
  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    this.data = this.dataservice.getDataChart();
    this.data.forEach(d => {
      this.month.push(d.month);
      this.price.push(d.price);
      this.stats = ['Abonnements', 'Données consultées', 'Pertinence des données'];
      this.score = [60, 55, 75];
    });
  }
  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: this.month,
        datasets: [
          {
            data: this.price,
            backgroundColor: '#189CF4',
            borderColor: '#3cba9f',
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
    this.chart2 = new Chart(this.canvas2.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: this.stats,
        datasets: [
          {
            data: this.score,
            backgroundColor: [
              '#CA002F',
              '#0048C4',
              '#EDF343'],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'],
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
