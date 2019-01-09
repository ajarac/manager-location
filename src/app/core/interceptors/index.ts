import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandleInterceptor } from './error-handle.interceptor';

export const INTERCEPTORS = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: ErrorHandleInterceptor,
		multi: true
	}
];
