import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   loggedIn:boolean = true

  //  if(loggedIn === true) {
  //   console.log("You are logged in")
  //  } else {
  //   console.log("You are logged out")
  //  }



  constructor() { }

  ngOnInit(): void {
  }

}

// console.log((loggedIn === true) ? "You are Logged in" : "You are logged out");
