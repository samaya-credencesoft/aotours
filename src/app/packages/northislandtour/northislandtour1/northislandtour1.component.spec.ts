import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Northislandtour1Component } from './northislandtour1.component';

describe('Northislandtour1Component', () => {
  let component: Northislandtour1Component;
  let fixture: ComponentFixture<Northislandtour1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Northislandtour1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Northislandtour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
