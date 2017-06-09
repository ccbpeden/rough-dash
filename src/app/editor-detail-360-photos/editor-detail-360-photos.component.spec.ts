import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetail360PhotosComponent } from './editor-detail-360-photos.component';

describe('EditorDetail360PhotosComponent', () => {
  let component: EditorDetail360PhotosComponent;
  let fixture: ComponentFixture<EditorDetail360PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetail360PhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetail360PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
