import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '2a2745ef191631c492721595e88c27ddbaa2747c';
    
    request = request.clone({setHeaders: {Authorization: 'Bearer ' + TOKEN}})

    return next.handle(request);
  }
}
