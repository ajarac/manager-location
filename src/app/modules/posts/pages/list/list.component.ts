import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@core/store';
import { Post } from '@core/models';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
	posts$: Observable<Post[]>;

	constructor(private store: Store<fromStore.State>, private router: Router) {
		this.store.dispatch(new fromStore.GetPosts());
		this.posts$ = this.store.select(fromStore.getPostList);
	}

	createPost(): void {
		this.router.navigate([ '/posts', 'create' ]);
	}

	detailPost(post: Post): void {
		this.router.navigate([ '/posts', post.id ]);
	}

	updatePost(post: Post): void {
		this.router.navigate([ '/posts', post.id, 'edit' ]);
	}

	deletePost(post: Post): void {
		this.store.dispatch(new fromStore.RemovePost(post.id));
	}
}
