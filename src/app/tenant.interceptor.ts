import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //  Appending the Tenant as header in the request
     
    const tenant = "stupa"
    const newRequestData = request.clone({setHeaders:{tenant}})
    return next.handle(newRequestData);
  }
}
