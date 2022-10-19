import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit {
  userName = 'User';

  name = 'Write your Username below'


  showSecret = false;
  log: any[] = [];


  constructor() {


  }
  ngOnInit(): void {
  }
onUpdateuserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
}
}
