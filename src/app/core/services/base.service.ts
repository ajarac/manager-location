import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http';

export interface BaseServiceImpl<T> {
	getList(): Observable<T[]>;
	getItem(id: number): Observable<T>;
	create(item: T): Observable<T>;
	update(item: T, id: number): Observable<T>;
	remove(id: number): Observable<any>;
}

export abstract class BaseService<T> implements BaseServiceImpl<T> {
	private _apiService: ApiService;

	constructor(injector: Injector, private _resource: string) {
		this._apiService = injector.get(ApiService);
	}

	getList(): Observable<T[]> {
		return this._apiService.get<T[]>(this._resource);
	}

	getItem(id: number): Observable<T> {
		return this._apiService.get<T>(`${this._resource}/${id}`);
	}

	create(item: T): Observable<T> {
		return this._apiService.post<T>(this._resource, item);
	}

	update(item: T, id: number): Observable<T> {
		return this._apiService.put<T>(`${this._resource}/${id}`, item);
	}

	remove(id: number): Observable<any> {
		return this._apiService.del(`${this._resource}/${id}`);
	}
}
