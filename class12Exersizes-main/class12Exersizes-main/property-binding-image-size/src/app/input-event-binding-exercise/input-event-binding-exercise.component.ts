import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-event-binding-exercise',
  templateUrl: './input-event-binding-exercise.component.html',
  styleUrls: ['./input-event-binding-exercise.component.css']
})




export class InputEventBindingExerciseComponent implements OnInit {






  title : string = "header"

  changeTitle(e:any){
    this.title = e.target.value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
