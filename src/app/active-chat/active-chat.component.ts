import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { ChatService } from '../service/chat-service';
import { Observable } from 'rxjs';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit {
  public windowTitle = 'Active Chat Window';

  // private messages: Message[] = [];
  private messages: Observable<Message>;

  private display: boolean; // whether to display info in the component
                            // use *ngIf="display" in your html to take
                            // advantage of this

  private alive: boolean; // used to unsubscribe from the TimerObservable
                          // when OnDestroy is called.
  private interval: number;
  constructor(private _chatService: ChatService) {
    this.display = false;
    this.alive = true;
    this.interval = 500;
  }

  // ngOnInit(): void {
  //   this.getMessages();
  //   window.setInterval(this.getMessages(),500);
  // }
  //
  // getMessages() {
  //   this._chatService.getMessages().subscribe(messages => {
  //     this.messages = messages;
  //     console.log(this.messages);
  //   });
  // }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        // this._chatService.getMessages().subscribe(messages => {
        //   this.messages = messages;
        //   console.log(this.messages);
        // });
        this.messages = this._chatService.getMessages();
      });
  }

  ngOnDestroy(){
    this.alive = false; // switches your TimerObservable off
  }
}
