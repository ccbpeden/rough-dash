import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetailMenuLinksComponent } from './desk-detail-menu-links.component';

describe('DeskDetailMenuLinksComponent', () => {
  let component: DeskDetailMenuLinksComponent;
  let fixture: ComponentFixture<DeskDetailMenuLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetailMenuLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetailMenuLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
