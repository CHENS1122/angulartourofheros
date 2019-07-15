import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];
  msgSvc: MessageService;

  constructor(msgSvc: MessageService) { 
    this.msgSvc = msgSvc;
  }

  ngOnInit() {
    this.messages = this.msgSvc.messages;
  }
}
