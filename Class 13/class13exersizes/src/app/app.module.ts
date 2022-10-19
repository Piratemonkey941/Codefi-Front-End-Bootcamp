import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostsComponent } from './my-profile/posts/posts.component';
import { UserEx3Component } from './user-ex3/user-ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    PostsComponent,
    UserComponent,
    UserEx3Component,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
