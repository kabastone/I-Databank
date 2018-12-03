import { Component, OnInit } from '@angular/core';
import {DataModel} from '../../data.model';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-data-list-by-categorie',
  templateUrl: './data-list-by-categorie.component.html',
  styleUrls: ['./data-list-by-categorie.component.css']
})
export class DataListByCategorieComponent implements OnInit {
  categorie: string
  categorieList: DataModel[];
  constructor(private route: ActivatedRoute, private router: Router, private dataservice: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.categorie = params['categorie'];
        });
    this.categorieList = this.dataservice.getDatasCategorie(this.categorie);
      }
}
