import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataModel} from '../../data.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {
@Input() data: DataModel;
@Input() index: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
