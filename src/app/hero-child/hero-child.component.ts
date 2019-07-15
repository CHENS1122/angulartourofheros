import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Event } from '@angular/router';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  @Input()
  hero: Hero;

  @Output()
  response = new EventEmitter<string>();

  @Input('master')
  master: string;

  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];

    for (let propName in changes) {

      let changedProp = changes[propName];

      let to = JSON.stringify(changedProp.currentValue);

      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set ot ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }

    this.changeLog.push(log.join(','));
  }

  // get masterName() {
  //   // console.log('getter get!');
  //   return this._masterName;
  // }

  // set masterName(name: string) {
  //   // console.log('setter set!');
  //   this._masterName = (name && name.trim()) || '<no name set>';
  // }

  onButtonClick() {
    this.response.emit('asdf');
  }

  checkResponse(event: Event) {
    console.log(event);
  }
}
