import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDetail360PhotosComponent } from './desk-detail-360-photos.component';

describe('DeskDetail360PhotosComponent', () => {
  let component: DeskDetail360PhotosComponent;
  let fixture: ComponentFixture<DeskDetail360PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDetail360PhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDetail360PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
