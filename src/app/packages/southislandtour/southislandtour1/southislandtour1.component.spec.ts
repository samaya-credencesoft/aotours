import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Southislandtour1Component } from './southislandtour1.component';

describe('Southislandtour1Component', () => {
  let component: Southislandtour1Component;
  let fixture: ComponentFixture<Southislandtour1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Southislandtour1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Southislandtour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
