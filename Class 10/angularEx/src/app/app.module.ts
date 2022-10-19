import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './manually-create-component/home.component';
import { Home2Component } from './home/home.component';

import { ParagraphList } from './generate-angular-component/generate-angular-component.component';
import { ParagraphListComponent } from './paragraph-list/paragraph-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,

    ParagraphList,
    ParagraphListComponent,
    NavbarComponent,
    DynamicContentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
