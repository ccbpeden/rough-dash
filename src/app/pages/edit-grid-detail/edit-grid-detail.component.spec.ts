import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGridDetailComponent } from './edit-grid-detail.component';

describe('EditGridDetailComponent', () => {
  let component: EditGridDetailComponent;
  let fixture: ComponentFixture<EditGridDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGridDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
