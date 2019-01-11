import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter, take, map } from 'rxjs/operators';

import * as fromStore from '@core/store';
import { Post } from '@core/models';

@Injectable()
export class PostGuard implements CanActivate {
	constructor(private store: Store<fromStore.State>) {}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		const postId: number = +route.paramMap.get('id');
		return this.store.select(fromStore.getPostEntity).pipe(
			tap((post: Post) => {
				if (!post || post.id !== postId) {
					this.store.dispatch(new fromStore.GetPostById(postId));
				}
			}),
			filter((post: Post) => !!post && post.id === postId),
			map((post: Post) => !!post && post.id === postId),
			take(1)
		);
	}
}
