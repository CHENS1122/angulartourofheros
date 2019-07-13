import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  constructor(private msgSvc: MessageService) 
  { }

  ngOnInit() {
    this.messages = this.msgSvc.messages;
  }
}
