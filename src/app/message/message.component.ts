import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Message, MessageService } from '@app/services/message.service';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message: Message | null = null;  // To hold the current message

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    // Subscribe to the message observable
    this.messageService.message$.subscribe((message) => {
      this.message = message;
      // Hide the message after 5 seconds
      setTimeout(() => {
        this.message = null;
      }, 5000);
    });
  }
}
