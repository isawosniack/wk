import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Message {
  type: 'success' | 'error' | 'info';  // message types
  content: string;  // content
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<Message>();  // Subject to handle messages
  message$ = this.messageSubject.asObservable();  // Observable for components to subscribe to

  constructor() {}

  // Show success message
  showSuccess(message: string) {
    this.showMessage('success', message);
  }

  // Show error message
  showError(message: string) {
    this.showMessage('error', message);
  }

  // Show info message
  showInfo(message: string) {
    this.showMessage('info', message);
  }

  // Private method to send a message
  private showMessage(type: 'success' | 'error' | 'info', content: string) {
    const message: Message = { type, content };
    this.messageSubject.next(message);  // Emit the message to subscribers
  }
}
