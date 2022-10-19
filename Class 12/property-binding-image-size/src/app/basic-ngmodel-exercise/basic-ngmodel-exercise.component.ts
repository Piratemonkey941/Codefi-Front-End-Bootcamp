import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-nmodel-exercise',
  templateUrl: './basic-ngmodel-exercise.component.html',
  styleUrls: ['./basic-ngmodel-exercise.component.css']
})
export class BasicNmodelExerciseComponent implements OnInit {

title:string = "header"

  constructor() { }

  ngOnInit(): void {
  }

}
