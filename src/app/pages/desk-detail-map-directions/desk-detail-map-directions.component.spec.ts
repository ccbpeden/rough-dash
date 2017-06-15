import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetailMapDirectionsComponent } from './desk-detail-map-directions.component';

describe('DeskDetailMapDirectionsComponent', () => {
  let component: DeskDetailMapDirectionsComponent;
  let fixture: ComponentFixture<DeskDetailMapDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetailMapDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetailMapDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
