import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-creator',
  templateUrl: './server-creator.component.html',
  styleUrls: ['./server-creator.component.css']
})
export class ServerCreatorComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server created.'
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus  = 'Server was created.' + this.serverName;

  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
