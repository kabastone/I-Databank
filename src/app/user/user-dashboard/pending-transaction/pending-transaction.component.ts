import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-transaction',
  templateUrl: './pending-transaction.component.html',
  styleUrls: ['./pending-transaction.component.css']
})
export class PendingTransactionComponent implements OnInit {
  dataCart = [
    {nom: 'Production agricole au Sénégal',
      description: 'Les données sur la production agricole au Sénégal entre 2002 et 2012'},
    {nom: 'Production sur le secteur de la peche au Sénégal',
      description: 'Evolution des capture en nombre de tonnes débarquées '}
  ];
  constructor() { }

  ngOnInit() {
  }

}
