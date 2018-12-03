import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataModel} from '../data.model';
import {DataService} from '../data.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {
  data: DataModel;
  id: number;
  isView = false;
  dataCart: DataModel[] = [];
  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.data = this.dataService.getData(this.id);
      }
    );
  }
  onView() {
    this.isView = !this.isView;
  }
  onAddCart(data: DataModel) {
     this.dataCart.push(data);
    // this.router.navigate(['cart'], {relativeTo: this.route});
    console.log(data);
  }

}
