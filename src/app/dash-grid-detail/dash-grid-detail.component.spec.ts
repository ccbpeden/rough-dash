import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashGridDetailComponent } from './dash-grid-detail.component';

describe('DashGridDetailComponent', () => {
  let component: DashGridDetailComponent;
  let fixture: ComponentFixture<DashGridDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashGridDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashGridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
