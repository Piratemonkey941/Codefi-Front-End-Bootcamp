import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // callnot use select by ID
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent   implements OnInit{

  serverId: number = 10;
  serverStatus:string= 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }



  getServerStatus() {
    return this.serverStatus;
  }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red'
    }

    ngOnInit(): void {
    }
}


// notes =======================================================
// export class ServersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


  // selector: '[app-servers]',
  // selector: '.app-servers',


  // template: `

  // `,
