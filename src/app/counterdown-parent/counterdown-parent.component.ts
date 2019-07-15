import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterdownChildComponent } from '../counterdown-child/counterdown-child.component';

@Component({
  selector: 'app-counterdown-parent',
  templateUrl: './counterdown-parent.component.html',
  styleUrls: ['./counterdown-parent.component.css']
})
export class CounterdownParentComponent implements OnInit {

  @ViewChild(CounterdownChildComponent, {static: false})
  private timerComponent: CounterdownChildComponent;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
