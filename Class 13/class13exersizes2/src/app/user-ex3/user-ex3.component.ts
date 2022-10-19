import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-ex3',
  templateUrl: './user-ex3.component.html',
  styleUrls: ['./user-ex3.component.css']
})
export class UserEx3Component implements OnInit {

@Input() inputUser: {username: string, Id: number} = {

  username: '',
  Id : 0

};

  constructor() { }

  ngOnInit(): void {
  }

}
