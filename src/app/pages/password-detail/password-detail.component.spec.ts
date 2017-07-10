import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDetailComponent } from './password-detail.component';

describe('PasswordDetailComponent', () => {
  let component: PasswordDetailComponent;
  let fixture: ComponentFixture<PasswordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
