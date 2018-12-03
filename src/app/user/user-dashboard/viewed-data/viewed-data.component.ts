import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewed-data',
  templateUrl: './viewed-data.component.html',
  styleUrls: ['./viewed-data.component.css']
})
export class ViewedDataComponent implements OnInit {
  dataCart = [
    {nom: 'Données forestières du Sénégal',
      description: 'Les données sur la production forestière au Sénégal entre 2002 et 2012'},
    {nom: 'Exportation des produits halieutiques du Sénégal',
      description: 'Evolution des capture en nombre de tonnes exportées '}
  ];
  constructor() { }

  ngOnInit() {
  }

}
