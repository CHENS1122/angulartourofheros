import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdownParentComponent } from './counterdown-parent.component';

describe('CounterdownParentComponent', () => {
  let component: CounterdownParentComponent;
  let fixture: ComponentFixture<CounterdownParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterdownParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterdownParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
