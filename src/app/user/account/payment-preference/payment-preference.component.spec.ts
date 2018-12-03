import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPreferenceComponent } from './payment-preference.component';

describe('PaymentPreferenceComponent', () => {
  let component: PaymentPreferenceComponent;
  let fixture: ComponentFixture<PaymentPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
