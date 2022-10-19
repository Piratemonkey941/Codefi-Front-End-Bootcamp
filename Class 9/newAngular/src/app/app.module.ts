import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerCreatorComponent } from './server-creator/server-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerCreatorComponent,

  ],
  imports: [

    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]  // goes to the other app.componant docs
})
export class AppModule { }


// goes here second home
