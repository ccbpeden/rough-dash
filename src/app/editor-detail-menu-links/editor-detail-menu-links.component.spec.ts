import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailMenuLinksComponent } from './editor-detail-menu-links.component';

describe('EditorDetailMenuLinksComponent', () => {
  let component: EditorDetailMenuLinksComponent;
  let fixture: ComponentFixture<EditorDetailMenuLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailMenuLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailMenuLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
