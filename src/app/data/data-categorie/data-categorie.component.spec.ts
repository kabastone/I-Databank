import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCategorieComponent } from './data-categorie.component';

describe('DataCategorieComponent', () => {
  let component: DataCategorieComponent;
  let fixture: ComponentFixture<DataCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
