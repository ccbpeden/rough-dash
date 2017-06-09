import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailMapDirectionsComponent } from './editor-detail-map-directions.component';

describe('EditorDetailMapDirectionsComponent', () => {
  let component: EditorDetailMapDirectionsComponent;
  let fixture: ComponentFixture<EditorDetailMapDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailMapDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailMapDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
