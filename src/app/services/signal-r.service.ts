import { Injectable, Output, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Terminal } from '../models/terminal.model';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  @Output() terminalStateUpdated = new EventEmitter<Terminal>();

  public data: Terminal;
  public breakComment: string;
  private hubConnection: signalR.HubConnection;

  public startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5003/terminal')
      .build();
    console.log('Connection Starting...');
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  public addTerminalStateUpdatedEventListener(): void {
    this.hubConnection.on('terminal-state-updated-event', (data, info) => {
      this.data = data;
      this.data.breakComment = info;
      this.terminalStateUpdated.emit(this.data);
    });
  }

  onDisconnectEventListener(): void {
    this.hubConnection.onclose((error) => console.log(error));
  }
}
