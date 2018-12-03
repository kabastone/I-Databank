import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events = [
    {date: '24 Janvier - 24 Janvier', title: 'Conférence: Big Data, intélligence ?', address: 'Paris, France'},
    {date: '16 Octobre - 17 Octobre', title: 'Data Mining 2019', address: 'Paris, France'},
    {date: '11 Décembre - 11 Décembre', title: 'Le Lean 6 Sigma devient-il obsolète avec l’arrivée du Big data ?', address: 'ENSAM, Paris'},
    {date: '20 Février - 21 Février', title: 'Le Big Data: une opportunité pour les PME - CAP DIGITAL CAMPUS', address: 'Paris, France'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
