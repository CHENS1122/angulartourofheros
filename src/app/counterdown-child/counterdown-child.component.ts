import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterdown-child',
  templateUrl: './counterdown-child.component.html',
  styleUrls: ['./counterdown-child.component.css']
})
export class CounterdownChildComponent implements OnInit {

  intervalId = 0;
  message = '';
  seconds = 11;

  constructor() { }

  ngOnInit() {
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }
  countDown() {
    this.clearTimer();

    this.intervalId = window.setInterval(() => {
      
      this.seconds -= 1;

      if(this.seconds === 1) {
        this.message = 'Blast off!';
      } else {
      
        if(this.seconds < 0) {
          this.seconds = 10;
        }
      
        this.message = `T-${this.seconds} seconds and counting;`
      }
    }, 1000);
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
}
