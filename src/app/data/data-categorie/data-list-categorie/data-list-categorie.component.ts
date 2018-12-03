import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from '../../data.model';

@Component({
  selector: 'app-data-list-categorie',
  templateUrl: './data-list-categorie.component.html',
  styleUrls: ['./data-list-categorie.component.css']
})
export class DataListCategorieComponent implements OnInit {
  categorieList = [{nom: 'Agriculture', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bakweri_cocoyam_farmer_from_Cameroon.jpg'},
    {nom: 'Peche', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/1/19/P%C3%AAche_boucotte.jpg'},
    {nom: 'Infrastructure', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Hansen_Dam_spillway_channel.jpg'},
    {nom: 'Education', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/AlterYouth_Logo.png'},
    {nom: 'Environnement', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Col_du_Glandon_%28environnement%29.JPG'},
    {nom: 'Urbanisme', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eggarten_-_Siedlung.jpg'}
  ];
  listCat: DataModel[];
  constructor() { }

  ngOnInit() {
    }
}
