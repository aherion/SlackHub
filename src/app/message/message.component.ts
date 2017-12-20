import { Component, OnInit, Input } from '@angular/core';
import {ChatService} from '../service/chat-service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

@Input()
message:any;

  constructor(private _chatService:ChatService) { }

  ngOnInit() {
  }

}
