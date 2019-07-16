import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthTour1GalleryComponent } from './north-tour1-gallery.component';

describe('NorthTour1GalleryComponent', () => {
  let component: NorthTour1GalleryComponent;
  let fixture: ComponentFixture<NorthTour1GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthTour1GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthTour1GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
