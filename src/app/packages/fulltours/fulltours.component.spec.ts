import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltoursComponent } from './fulltours.component';

describe('FulltoursComponent', () => {
  let component: FulltoursComponent;
  let fixture: ComponentFixture<FulltoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
