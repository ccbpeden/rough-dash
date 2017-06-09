import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailPhotoGalleryComponent } from './editor-detail-photo-gallery.component';

describe('EditorDetailPhotoGalleryComponent', () => {
  let component: EditorDetailPhotoGalleryComponent;
  let fixture: ComponentFixture<EditorDetailPhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailPhotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
