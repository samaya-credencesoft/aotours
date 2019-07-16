import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AucklandTour3GalleryComponent } from './auckland-tour3-gallery.component';

describe('AucklandTour3GalleryComponent', () => {
  let component: AucklandTour3GalleryComponent;
  let fixture: ComponentFixture<AucklandTour3GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AucklandTour3GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AucklandTour3GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
