import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-n',
  templateUrl: './users-n.component.html',
  styleUrls: ['./users-n.component.css']
})
export class UsersNComponent implements OnInit {
  
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
