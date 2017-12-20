import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { ChatService } from '../service/chat-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit {
  public windowTitle = 'Active Chat Window';

  private messages: Observable<any>;



  constructor(private _chatService: ChatService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messages = this._chatService.getMessages();
  }

}
