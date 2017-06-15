import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetailPromoBannerComponent } from './desk-detail-promo-banner.component';

describe('DeskDetailPromoBannerComponent', () => {
  let component: DeskDetailPromoBannerComponent;
  let fixture: ComponentFixture<DeskDetailPromoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetailPromoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetailPromoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
