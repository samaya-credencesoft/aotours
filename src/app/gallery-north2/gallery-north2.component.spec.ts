import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNorth2Component } from './gallery-north2.component';

describe('GalleryNorth2Component', () => {
  let component: GalleryNorth2Component;
  let fixture: ComponentFixture<GalleryNorth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNorth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNorth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
