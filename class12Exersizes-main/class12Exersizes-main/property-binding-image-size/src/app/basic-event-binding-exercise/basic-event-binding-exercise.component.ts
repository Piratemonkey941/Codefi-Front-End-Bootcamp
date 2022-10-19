import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-event-binding-exercise',
  templateUrl: './basic-event-binding-exercise.component.html',
  styleUrls: ['./basic-event-binding-exercise.component.css']
})
export class BasicEventBindingExerciseComponent implements OnInit {

 

  logConsole(){
    console.log('EX completed')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
