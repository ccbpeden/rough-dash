import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDetailInvoicesComponent } from './billing-detail-invoices.component';

describe('BillingDetailInvoicesComponent', () => {
  let component: BillingDetailInvoicesComponent;
  let fixture: ComponentFixture<BillingDetailInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDetailInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
