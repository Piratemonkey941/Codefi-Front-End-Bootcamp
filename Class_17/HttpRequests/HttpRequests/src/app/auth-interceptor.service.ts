import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, } from 'rxjs';
import {  tap } from 'rxjs/operators';

@Injectable()





export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    });
    return next.handle(modifiedRequest)

  }
}


// .pipe(
//   tap(event => {
//     console.log(event)
//     if(event.type === HttpEventType.Response) {
//       console.log('Response Body Arrived');
//       console.log(event.body);
//     }
// })

// console.log('Request incomming')
// console.log(req.url)
