import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRowDetailComponent } from './edit-row-detail.component';

describe('EditRowDetailComponent', () => {
  let component: EditRowDetailComponent;
  let fixture: ComponentFixture<EditRowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
