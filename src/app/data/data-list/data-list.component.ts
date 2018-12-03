import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataModel} from '../data.model';
import {DataService} from '../data.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataList: DataModel[];
  id: number;
  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataList = this.dataService.getDatas();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];     }
    );
  }
}
