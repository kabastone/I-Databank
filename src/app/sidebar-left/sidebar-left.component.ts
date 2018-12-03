import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {
  actus = [
    {titre: 'Les nouveautés Spark',
      contenu: 'Après Cloudera et MapR, HortonWorks annonce à son tour l\'arrivée du moteur de traitement' +
      ' in-memory Spark dans sa distribution HDP 2.1. ',
    imgPath: 'assets/img/sparknews.jpg'},
    {titre: 'Visual Studio Code se dote d\'un add-on Python pour l\'exploration des données',
    contenu: 'Cette extension du langage Python ajoute des fonctions d\'exploration des données et donne accès ' +
    'à des modèles d\'apprentissage machine.',
    imgPath: 'assets/img/bigdatanews.jpg'},
    {titre: 'Visual Studio Code se dote d\'un add-on Python pour l\'exploration des données',
      contenu: 'Cette extension du langage Python ajoute des fonctions d\'exploration des données et donne accès ' +
      'à des modèles d\'apprentissage machine.',
      imgPath: 'assets/img/bigdatanews.jpg'}
  ];
  style = '';
  constructor() { }

  ngOnInit() {
  }

}
