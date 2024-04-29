import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor as HttpI,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptor implements HttpI {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.tokenService.isAuthentication.subscribe({
      next: (value) => {
        if (value) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.tokenService.getToken()}`,
            },
          });
        }
      },
    });

    return next.handle(request).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 401) {
          this.tokenService.removeToken();
          this.router.navigate(['']); // Redireciona para a página de login
        }
        const error = e.error?.error?.message || e.statusText;
        return throwError(() => error);
      })
    );
  }
}
