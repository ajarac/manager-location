import { Router, ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as fromStore from '@core/store';
import { Post } from '@core/models';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
	post$: Observable<Post>;

	rowsGrid$: Observable<number> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => (result.matches ? 1 : 2)));

	constructor(
		private store: Store<fromStore.State>,
		private router: Router,
		private breakpointObserver: BreakpointObserver
	) {
		this.post$ = this.store.select(fromStore.getPostEntity);
	}

	goBack(): void {
		this.router.navigate([ '/posts' ]);
	}

	editPost(id: number): void {
		this.router.navigate([ '/posts', id, 'edit' ]);
	}

	removePost(id: number): void {
		this.store.dispatch(new fromStore.RemovePost(id));
	}
}
