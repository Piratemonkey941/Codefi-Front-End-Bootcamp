import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compAdatabinding';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  serverElements = [{type:'server', name:"", content: 'Servers Listed Below'}];

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

 onDestroyFirst(){
  this.serverElements.splice(0,1);
 }

 onIntervalFired(firedNumber:number){
  if (firedNumber % 2 === 0) {
    this.evenNumbers.push(firedNumber);
  } else{
    this.oddNumbers.push(firedNumber);
  }
 }
}
