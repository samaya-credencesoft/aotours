import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySouth2Component } from './gallery-south2.component';

describe('GallerySouth2Component', () => {
  let component: GallerySouth2Component;
  let fixture: ComponentFixture<GallerySouth2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySouth2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySouth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
