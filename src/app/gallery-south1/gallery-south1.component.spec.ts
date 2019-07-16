import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySouth1Component } from './gallery-south1.component';

describe('GallerySouth1Component', () => {
  let component: GallerySouth1Component;
  let fixture: ComponentFixture<GallerySouth1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySouth1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySouth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
