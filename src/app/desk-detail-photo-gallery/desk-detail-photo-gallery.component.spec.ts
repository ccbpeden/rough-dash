import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetailPhotoGalleryComponent } from './desk-detail-photo-gallery.component';

describe('DeskDetailPhotoGalleryComponent', () => {
  let component: DeskDetailPhotoGalleryComponent;
  let fixture: ComponentFixture<DeskDetailPhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetailPhotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetailPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
