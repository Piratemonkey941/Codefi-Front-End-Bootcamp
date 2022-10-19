import { Component, Output, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


@Output() postList: string[] =
[ "post1",
  "post2",
  "post3",
  "post4",
  "post5",];


  users: {username: string, Id: number }[] = [

    {
     username: "AnthonyR",
     Id:1
    },
    {
     username:"JillianR",
     Id:2
    },
    {
     username:"TheoR",
     Id:3
    },

   
     ]
}



  // ['JohnDoe123', 'CaptainIron43', 'coderGal22']




