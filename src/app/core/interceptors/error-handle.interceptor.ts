import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SnackBarService } from '@core/services';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {
	constructor(private snackBarService: SnackBarService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				this.snackBarService.error(error.message);
				return throwError(error);
			})
		);
	}
}
