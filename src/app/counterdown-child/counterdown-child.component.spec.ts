import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdownChildComponent } from './counterdown-child.component';

describe('CounterdownChildComponent', () => {
  let component: CounterdownChildComponent;
  let fixture: ComponentFixture<CounterdownChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterdownChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterdownChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
