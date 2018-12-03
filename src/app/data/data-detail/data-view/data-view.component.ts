import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from '../../data.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  @Input() dataView: DataModel;
  @Input() affiche: boolean;
  col: string[];
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
        // this.data = this.dataService.getData(this.index);
  }

}
