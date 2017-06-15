import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetailVidGalleryComponent } from './desk-detail-vid-gallery.component';

describe('DeskDetailVidGalleryComponent', () => {
  let component: DeskDetailVidGalleryComponent;
  let fixture: ComponentFixture<DeskDetailVidGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetailVidGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetailVidGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
