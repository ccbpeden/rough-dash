import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailInfoLinksComponent } from './editor-detail-info-links.component';

describe('EditorDetailInfoLinksComponent', () => {
  let component: EditorDetailInfoLinksComponent;
  let fixture: ComponentFixture<EditorDetailInfoLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailInfoLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailInfoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
