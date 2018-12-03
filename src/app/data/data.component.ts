import { Component, OnInit } from '@angular/core';
import {DataModel} from './data.model';
import {DataService} from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  selectedData: DataModel;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
