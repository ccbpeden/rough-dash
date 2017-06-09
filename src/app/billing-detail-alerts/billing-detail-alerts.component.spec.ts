import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDetailAlertsComponent } from './billing-detail-alerts.component';

describe('BillingDetailAlertsComponent', () => {
  let component: BillingDetailAlertsComponent;
  let fixture: ComponentFixture<BillingDetailAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDetailAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
