import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDetailPaymentMethodComponent } from './billing-detail-payment-method.component';

describe('BillingDetailPaymentMethodComponent', () => {
  let component: BillingDetailPaymentMethodComponent;
  let fixture: ComponentFixture<BillingDetailPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDetailPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
