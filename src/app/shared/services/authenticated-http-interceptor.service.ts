import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly authenticationService: AuthentificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: any = {
      'Content-Type': 'application/json'
    };
    const authorization = this.authenticationService.getToken();
    if (authorization) {
      headers.Authorization = authorization;
    }

    if (req.body instanceof FormData) {
      Reflect.deleteProperty(headers, 'Content-Type');
    }

    const authReq = req.clone({ setHeaders: headers, withCredentials: true });
    return next.handle(authReq);
  }
}
