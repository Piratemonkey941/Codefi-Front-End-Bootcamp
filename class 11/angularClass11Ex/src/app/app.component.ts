import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularClass11Ex';

  heading:string = "User Post"

  number: number = 1

  info:any = {
    firstname: "Anthony",
    lastname:"Rodriguez"
  }

  isDisabled:boolean = true


}

