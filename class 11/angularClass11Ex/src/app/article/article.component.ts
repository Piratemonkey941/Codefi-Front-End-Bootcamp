import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "Please Change Color"

  content: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime repellendus aliquid atque porro deleniti. Aspernatur accusamus tempore voluptatum quisquam id nihil eligendi, saepe quidem aperiam repellendus consequuntur odio non iure."


  isTechRelated: boolean = true


  techRelatedStyle() {
    if(this.isTechRelated === true){
      return 'blue';
    }
    return 'yellow';
  }

}
