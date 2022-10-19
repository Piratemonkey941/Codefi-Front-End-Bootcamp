import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
OnInit,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy

// @ViewChild('heading', {static:false}) header: ElementRef;
{

 @Input('srvElement') element!: {type: string, name: string, content: string};

  constructor() {
    console.log('constructor called')
  }



  ngOnInit(): void {
    console.log('ngOnInit called')
    // console.log(this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }





}
