import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-image-size',
  templateUrl: './binding-image-size.component.html',
  styleUrls: ['./binding-image-size.component.css']
})
export class BindingImageSizeComponent implements OnInit {

title = 'c12exersizes'
width: number = 500;
height: number = 500;


  constructor() {
    setTimeout(() => {
      this.width = 500
    }, 1000)
  }

  ngOnInit(): void {
  }

}
