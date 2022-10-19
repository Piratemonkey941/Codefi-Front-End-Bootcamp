import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-button-event-binding',
  templateUrl: './dynamic-button-event-binding.component.html',
  styleUrls: ['./dynamic-button-event-binding.component.css']
})
export class DynamicButtonEventBindingComponent implements OnInit {
  isDisabled:boolean = true
  toggleDisable() {
    this.isDisabled = !this.isDisabled
  }

  constructor() {


   }

   ngOnInit(): void {
  }

}
