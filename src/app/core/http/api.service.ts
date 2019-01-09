import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient, @Inject('API_URL') private api_url: string) {}

	get<T>(url: string): Observable<T> {
		return this.http.get<T>(this.buildUrl(url));
	}

	post<T>(url: string, body?: any): Observable<T> {
		return this.http.post<T>(this.buildUrl(url), body);
	}

	put<T>(url: string, body?: any): Observable<T> {
		return this.http.put<T>(this.buildUrl(url), body);
	}

	del<T>(url: string): Observable<T> {
		return this.http.delete<T>(this.buildUrl(url));
	}

	private buildUrl(url: string): string {
		return `${this.api_url}/${url}`;
	}
}
