import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailPromoBannerComponent } from './editor-detail-promo-banner.component';

describe('EditorDetailPromoBannerComponent', () => {
  let component: EditorDetailPromoBannerComponent;
  let fixture: ComponentFixture<EditorDetailPromoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailPromoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailPromoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
