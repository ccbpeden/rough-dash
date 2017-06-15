import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRowDetailComponent } from './dash-row-detail.component';

describe('DashRowDetailComponent', () => {
  let component: DashRowDetailComponent;
  let fixture: ComponentFixture<DashRowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashRowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
