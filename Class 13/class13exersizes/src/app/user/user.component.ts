import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Output() myName = 'Anthony Rodriguez'

  constructor() { }

  ngOnInit(): void {
  }

}
