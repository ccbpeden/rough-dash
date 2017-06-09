import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailVideoGalleryComponent } from './editor-detail-video-gallery.component';

describe('EditorDetailVideoGalleryComponent', () => {
  let component: EditorDetailVideoGalleryComponent;
  let fixture: ComponentFixture<EditorDetailVideoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailVideoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailVideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
