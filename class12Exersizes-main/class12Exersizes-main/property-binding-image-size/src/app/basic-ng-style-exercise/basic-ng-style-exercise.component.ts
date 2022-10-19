import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ng-style-exercise',
  templateUrl: './basic-ng-style-exercise.component.html',
  styleUrls: ['./basic-ng-style-exercise.component.css']
})
export class BasicNStyleExerciseComponent implements OnInit {


  myColor:string = "green"

  constructor() { }

  ngOnInit(): void {
  }

}
