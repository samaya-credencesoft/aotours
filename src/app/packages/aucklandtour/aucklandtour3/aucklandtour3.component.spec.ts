import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aucklandtour3Component } from './aucklandtour3.component';

describe('Aucklandtour3Component', () => {
  let component: Aucklandtour3Component;
  let fixture: ComponentFixture<Aucklandtour3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aucklandtour3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aucklandtour3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
