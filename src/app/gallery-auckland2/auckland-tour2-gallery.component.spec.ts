import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AucklandTour2GalleryComponent } from './auckland-tour2-gallery.component';

describe('AucklandTour2GalleryComponent', () => {
  let component: AucklandTour2GalleryComponent;
  let fixture: ComponentFixture<AucklandTour2GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AucklandTour2GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AucklandTour2GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
