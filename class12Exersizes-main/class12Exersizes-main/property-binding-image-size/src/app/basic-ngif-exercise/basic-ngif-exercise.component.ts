import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ngif-exercise',
  templateUrl: './basic-ngif-exercise.component.html',
  styleUrls: ['./basic-ngif-exercise.component.css']
})
export class BasicNifExerciseComponent{

  title = 'book-app';
  isShow = true;


  constructor() { }

  ngOnInit(): void {
  }

}
