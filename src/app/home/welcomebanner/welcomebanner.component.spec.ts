import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomebannerComponent } from './welcomebanner.component';

describe('WelcomebannerComponent', () => {
  let component: WelcomebannerComponent;
  let fixture: ComponentFixture<WelcomebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
