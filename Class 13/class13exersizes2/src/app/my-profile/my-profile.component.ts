import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


@Input() myPosts: string[] = []

  constructor() { }

  ngOnInit(): void {
  }


}


