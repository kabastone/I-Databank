import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.css']
})
export class CategorieItemComponent implements OnInit {
@Input() categorie;
  constructor() { }

  ngOnInit() {
  }

}
