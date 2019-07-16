import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAuckland1Component } from './gallery-auckland1.component';

describe('GalleryAuckland1Component', () => {
  let component: GalleryAuckland1Component;
  let fixture: ComponentFixture<GalleryAuckland1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAuckland1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAuckland1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
