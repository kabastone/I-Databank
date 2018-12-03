import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-categorie',
  templateUrl: './data-categorie.component.html',
  styleUrls: ['./data-categorie.component.css']
})
export class DataCategorieComponent implements OnInit {
  categorieList = [{nom: 'Agriculture', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bakweri_cocoyam_farmer_from_Cameroon.jpg'},
    {nom: 'Peche', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/1/19/P%C3%AAche_boucotte.jpg'},
    {nom: 'Infrastructure', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Hansen_Dam_spillway_channel.jpg'},
    {nom: 'Education', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/AlterYouth_Logo.png'},
    {nom: 'Environnement', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Col_du_Glandon_%28environnement%29.JPG'},
    {nom: 'Urbanisme', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eggarten_-_Siedlung.jpg'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
