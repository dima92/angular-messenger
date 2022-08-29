import {Injectable} from '@angular/core';
import io from 'socket.io-client';
import {Socket} from 'socket.io-client'
import {environment} from '../../../environments/environment';
import {IncomingMessage} from "../../chat/models/message.model";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: Socket | null = null;

  connect(token: string) {
    this.disconnect();

    this.socket = io(environment.apiUrl, {query: {auth_token: token}});

    this.socket?.on('message', (message: IncomingMessage) => {
      console.log(message);
    });
  }

  disconnect() {
    this.socket?.disconnect();
  }
}
