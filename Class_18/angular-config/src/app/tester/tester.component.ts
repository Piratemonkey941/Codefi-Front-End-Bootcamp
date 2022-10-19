import { Component, NgModule, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider'
import {MatMenuModule} from '@angular/material/menu';



@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule ({
  imports: [
    MatSliderModule,
    MatMenuModule,
  ]
})
class AppModule {}
