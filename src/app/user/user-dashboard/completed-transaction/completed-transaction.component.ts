import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-transaction',
  templateUrl: './completed-transaction.component.html',
  styleUrls: ['./completed-transaction.component.css']
})
export class CompletedTransactionComponent implements OnInit {
  dataCart = [
    {nom: 'Données sur l\'élevage au Sénégal',
      description: 'Production locale et importation en viande au Sénégal'},
    {nom: 'Exportation des produits halieutiques du Sénégal',
      description: 'Evolution des capture en nombre de tonnes exportées '},
    {nom: 'Données hydraulique au Sénégal',
      description: 'Situation des travaux d\'amélioration de de l\' approvisionnement en eau potable'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
