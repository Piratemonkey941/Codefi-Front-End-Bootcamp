import {  HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Outgoing Reques')
    console.log(req.url)
    console.log(req.headers)
    return next.handle(req).pipe(
      tap(event => {
        if(event.type === HttpEventType.Response) {
          console.log('Incomming Response')
          console.log(event.body)
        }
      })
    );
  }
}

