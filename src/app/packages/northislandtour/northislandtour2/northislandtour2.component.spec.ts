import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Northislandtour2Component } from './northislandtour2.component';

describe('Northislandtour2Component', () => {
  let component: Northislandtour2Component;
  let fixture: ComponentFixture<Northislandtour2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Northislandtour2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Northislandtour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
