import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aucklandtour1Component } from './aucklandtour1.component';

describe('Aucklandtour1Component', () => {
  let component: Aucklandtour1Component;
  let fixture: ComponentFixture<Aucklandtour1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aucklandtour1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aucklandtour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
