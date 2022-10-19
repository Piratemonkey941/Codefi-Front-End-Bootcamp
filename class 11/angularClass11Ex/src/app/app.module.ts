import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendsComponent } from './friends/friends.component';



import { HomeComponent } from './home/home.component';
import { PostsComponent } from './home/posts/posts.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostsComponent2 } from './my-profile/posts2/posts.component';




import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { Post3Component } from './post3/post3.component';
import { ArticleComponent } from './article/article.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    NavbarComponent,
    HomeComponent,
    FriendsComponent,
    MyProfileComponent,
    PostsComponent,
    PostsComponent2,
    FriendsListComponent,
    Post3Component,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}




