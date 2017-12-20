import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../service/chat-service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message: any;
  edit: boolean;

  constructor(private _chatService: ChatService) {
    this.edit = false;
  }

  ngOnInit() {
  }

  delete(): void {
    this._chatService.deleteMessage(this.message.messageID);
  }
  update(newMessage: any): void {
    console.log(this.message.messageID)
    this._chatService.updateMessage(this.message.messageID, newMessage);
    this.editing();
  }
  editing() {
    this.edit = !this.edit;
  }

}
