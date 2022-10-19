import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   styles:[`    // alternate method to sty le
//   h3 {
//   color: rgb(200, 10, 200);
// }

//   ` ]
})
export class AppComponent {
  name = 'Anthony';
  username = '';

  showSecret = false;
  log: any[] = [];
  // log: number[]  = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
    // this.log.push(this.log.length + 1);
  }
}
// list app root , sends things to index.htmnl
//
// you build app from componants
