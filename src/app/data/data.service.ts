import { Injectable } from '@angular/core';
import {DataModel} from './data.model';
import {Data} from './data';

@Injectable()
export class DataService {
  datalistCat: DataModel[];

  dataList: DataModel[] = [
    new DataModel(0, 'Des données sur l\'agriculture', 'Un simple test de donnée', 'Agriculture', 'Collection de donnees', new Date(), 1,
      [{Années: '2002', Production_en_t: 20000, Superficie_ha: 100, Rendement_kgha: 50},
        {Année: '2010', 'Production(t)': 20000, 'Superficie(ha)': 100, 'Rendement(kg/ha)': 200},
        {Année: '2012', 'Production(t)': 30000, 'Superficie(ha)': 200, 'Rendement(kg/ha)': 150},
        {Année: '2009', 'Production(t)': 40000, 'Superficie(ha)': 400, 'Rendement(kg/ha)': 100},
        {Année: '2007', 'Production(t)': 10000, 'Superficie(ha)': 300, 'Rendement(kg/ha)': 300}]),
    new DataModel(1, 'Des données sur l\'agriculture', 'Un simple test de donnée', 'Agriculture', 'Collection de donnees', new Date(), 1,
      [{Années: '2002', Production_en_t: 20000, Superficie_ha: 100, Rendement_kgha: 50},
        {Année: '2010', 'Production(t)': 20000, 'Superficie(ha)': 100, 'Rendement(kg/ha)': 200},
        {Année: '2012', 'Production(t)': 30000, 'Superficie(ha)': 200, 'Rendement(kg/ha)': 150},
        {Année: '2009', 'Production(t)': 40000, 'Superficie(ha)': 400, 'Rendement(kg/ha)': 100},
        {Année: '2007', 'Production(t)': 10000, 'Superficie(ha)': 300, 'Rendement(kg/ha)': 300}]),

    new DataModel(2, 'Des données sur la peche', 'Un simple test de donnée', 'Peche', 'Collection de donnees', new Date(), 3,
       [{Année: '2002', Produit: 'Poisson', Prise_t: 1200},
{Année: '2003', Produit: 'Crustacé', Prise_t: 500},
{Année: '2007', Produit: 'Mollusque', Prise_t: 300},
{Année: '2010', Produit: 'Autre', Prise_t: 700}]),
    new DataModel(3, 'Des données sur la peche', 'Un simple test de donnée', 'Peche', 'Collection de donnees', new Date(), 3,
      [{Année: '2002', Produit: 'Poisson', Prise_t: 1200},
        {Année: '2003', Produit: 'Crustacé', Prise_t: 500},
        {Année: '2007', Produit: 'Mollusque', Prise_t: 300},
        {Année: '2010', Produit: 'Autre', Prise_t: 700}]),
  ];
datachart = [
      new Data('Jan', 180),
      new Data('Fév', 200),
      new Data('Mars', 210),
      new Data('Avril', 190),
      new Data('Mai', 240),
      new Data('Juin', 230),
      new Data('Juillet', 260),
      new Data('Aout', 210),
      new Data('Sept', 300),
    ];
  constructor() { }
  getDatas() {
    return this.dataList.slice();
  }
  getData(index: number) {
    return this.dataList[index];
  }
  getDatasCategorie(categorie: string) {
    if (categorie === 'Agriculture') {
      this.datalistCat = [
        new DataModel(0, 'Un test de donnees', 'Un simple test de donnée', 'Agriculture', 'Collection de donnees', new Date(), 1,
          [{Années: '2002', Production_en_t: 20000, Superficie_ha: 100, Rendement_kgha: 50},
            {Année: '2010', 'Production(t)': 20000, 'Superficie(ha)': 100, 'Rendement(kg/ha)': 200},
            {Année: '2012', 'Production(t)': 30000, 'Superficie(ha)': 200, 'Rendement(kg/ha)': 150},
            {Année: '2009', 'Production(t)': 40000, 'Superficie(ha)': 400, 'Rendement(kg/ha)': 100},
            {Année: '2007', 'Production(t)': 10000, 'Superficie(ha)': 300, 'Rendement(kg/ha)': 300}]),
        new DataModel(1, 'Un test de donnees', 'Un simple test de donnée', 'Agriculture', 'Collection de donnees', new Date(), 1,
          [{Années: '2002', Production_en_t: 20000, Superficie_ha: 100, Rendement_kgha: 50},
            {Année: '2010', 'Production(t)': 20000, 'Superficie(ha)': 100, 'Rendement(kg/ha)': 200},
            {Année: '2012', 'Production(t)': 30000, 'Superficie(ha)': 200, 'Rendement(kg/ha)': 150},
            {Année: '2009', 'Production(t)': 40000, 'Superficie(ha)': 400, 'Rendement(kg/ha)': 100},
            {Année: '2007', 'Production(t)': 10000, 'Superficie(ha)': 300, 'Rendement(kg/ha)': 300}])
      ];
    } else {
      this.datalistCat = [
        new DataModel(2, 'Un test de donnees', 'Un simple test de donnée', 'Peche', 'Collection de donnees', new Date(), 3,
          [{Année: '2002', Produit: 'Poisson', Prise_t: 1200},
            {Année: '2003', Produit: 'Crustacé', Prise_t: 500},
            {Année: '2007', Produit: 'Mollusque', Prise_t: 300},
            {Année: '2010', Produit: 'Autre', Prise_t: 700}]),
        new DataModel(3, 'Un test de donnees', 'Un simple test de donnée', 'Peche', 'Collection de donnees', new Date(), 3,
          [{Année: '2002', Produit: 'Poisson', Prise_t: 1200},
            {Année: '2003', Produit: 'Crustacé', Prise_t: 500},
            {Année: '2007', Produit: 'Mollusque', Prise_t: 300},
            {Année: '2010', Produit: 'Autre', Prise_t: 700}]),

      ];
    }
    return this.datalistCat;
  }
  getDataChart() {
    return  this.datachart;
  }
}
