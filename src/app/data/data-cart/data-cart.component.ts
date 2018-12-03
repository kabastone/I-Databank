import {Component, Input, OnInit} from '@angular/core';
import {DataModel} from '../data.model';

@Component({
  selector: 'app-data-cart',
  templateUrl: './data-cart.component.html',
  styleUrls: ['./data-cart.component.css']
})
export class DataCartComponent implements OnInit {
  dataCart = [
    {nom: 'Production agricole au Sénégal',
      description: 'Les données sur la production agricole au Sénégal entre 2002 et 2012'},
    {nom: 'Production sur le secteur de la peche au Sénégal',
      description: 'Evolution des capture en nombre de tonnes débarquées '}
  ]
  constructor() { }

  ngOnInit() {
  }

}
