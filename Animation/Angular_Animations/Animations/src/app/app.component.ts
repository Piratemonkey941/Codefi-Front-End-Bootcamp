import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { transform } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [

    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform  : 'translateX(0px)'

      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(200)),

    ]),

    trigger('wildState', [

      state('normal', style({
        'background-color': 'red',
        transform  : 'translate(0px) scale(1)'

      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translate(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform  : 'translate(0px) scale(0.5)'
      })),


      transition('normal => highlighted', animate(500)),
      transition('highlighted => normal', animate(500)),
      transition('shrunken <=> *', [
         style({
          'background-color': 'orange'
         }),
         animate(1000, style({
          borderRadius: '50px'
         })),
         animate(500),
      ])
    ]),

    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform  : 'translateX(0px)'

      })),

      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),  animate(200)
      ]),
        transition('* <=> void', [
        animate(400, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))

      ]),

    ]),


  trigger('list2', [
      state('in', style({
        opacity: 1,
        transform  : 'translateX(0px)'

      })),

      transition('void <=> *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset:0 ,
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3,
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8,
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1,
          }),
        ]))
      ]),

      transition('* <=> void', [
        group([
          animate(400, style({
            color: 'red'
           })),
           animate(800, style({
             transform: 'translateX(100px)',
             opacity: 0
           })),


        ])


      ]),

    ]),

  ]
})
// borderRadius: '50px'
export class AppComponent {
state = 'normal';
wildState = 'normal';

list = ['Milk', 'Sugar', 'Bread'];
event = ''

onAnimate() {
  this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal'
  this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'
}

onShrink() {
  this.wildState = 'shrunken'

}

onAdd(item: any) {
  this.list.push(item);
}

onDelete(item: any) {
   this.list.splice(this.list.indexOf(item), 1);
  }

animationStarted(event:any) {
  console.log(event);
}
animationEnded(event:any) {
  console.log(event);
  }
}
