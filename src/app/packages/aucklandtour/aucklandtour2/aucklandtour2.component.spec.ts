import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aucklandtour2Component } from './aucklandtour2.component';

describe('Aucklandtour2Component', () => {
  let component: Aucklandtour2Component;
  let fixture: ComponentFixture<Aucklandtour2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aucklandtour2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aucklandtour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
