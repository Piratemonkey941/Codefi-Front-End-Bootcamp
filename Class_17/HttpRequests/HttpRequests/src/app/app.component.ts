import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
   this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage
    });
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);



  }


  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
  },
  error => {
    this.isFetching = false;
    this.error = error.message
    console.log(error);
  })
}

  onClearPosts(): void {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];

    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
      this.errorSub.unsubscribe();
  }

}

// this.http
// .post< { name: string} >(
//   'https://ng-complete-guide-7c1da-default-rtdb.firebaseio.com/posts.json',
//    postData,
//   ).subscribe(responseData => {
//     console.log(responseData);
//   });

// this.http
// .get<{ [key: string]: Post} >('https://ng-complete-guide-7c1da-default-rtdb.firebaseio.com/posts.json',)
// .pipe(
//   map(responseData => {
//     const postArray: Post[] = [];
//     for (const key in responseData) {
//       if (responseData.hasOwnProperty(key)) {
//         postArray.push({ ...responseData[key], id: key })
//       }
//     }
//     return postArray;
//   })
// )
// .subscribe(posts => {
//   this.isFetching = false;
//    this.loadedPosts = posts;
// });

// private fetchPosts() {
//   this.isFetching = true;

// }
