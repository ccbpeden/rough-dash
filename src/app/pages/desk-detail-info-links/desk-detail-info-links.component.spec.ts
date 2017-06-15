import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetailInfoLinksComponent } from './desk-detail-info-links.component';

describe('DeskDetailInfoLinksComponent', () => {
  let component: DeskDetailInfoLinksComponent;
  let fixture: ComponentFixture<DeskDetailInfoLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetailInfoLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetailInfoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
