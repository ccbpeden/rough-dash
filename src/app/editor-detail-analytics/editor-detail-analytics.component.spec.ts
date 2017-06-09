import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailAnalyticsComponent } from './editor-detail-analytics.component';

describe('EditorDetailAnalyticsComponent', () => {
  let component: EditorDetailAnalyticsComponent;
  let fixture: ComponentFixture<EditorDetailAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDetailAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDetailAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
