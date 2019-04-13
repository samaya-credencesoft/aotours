import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Southislandtour2Component } from './southislandtour2.component';

describe('Southislandtour2Component', () => {
  let component: Southislandtour2Component;
  let fixture: ComponentFixture<Southislandtour2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Southislandtour2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Southislandtour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
