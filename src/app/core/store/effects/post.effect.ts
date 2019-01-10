import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { mergeMap, map, tap } from 'rxjs/operators';

import { PostService } from '@core/services';
import { Post } from '@core/models';

import * as postActions from '../actions/post.action';

@Injectable()
export class PostEffect {
	constructor(private actions: Actions, private postService: PostService, private router: Router) {}

	@Effect()
	getList$ = this.actions.pipe(
		ofType(postActions.GET_POSTS),
		mergeMap(() => this.postService.getList()),
		map((posts: Post[]) => new postActions.GetPostsSuccess(posts))
	);

	@Effect()
	getPostById$ = this.actions.pipe(
		ofType(postActions.GET_POST_BY_ID),
		map((action: postActions.GetPostById) => action.payload),
		mergeMap((id: number) => this.postService.getItem(id)),
		map((post: Post) => new postActions.GetPostByIdSuccess(post))
	);

	@Effect()
	createPost$ = this.actions.pipe(
		ofType(postActions.CREATE_POST),
		map((action: postActions.CreatePost) => action.payload),
		mergeMap((post: Post) => this.postService.create(post)),
		map(() => new postActions.CreatePostSuccess())
	);

	@Effect()
	updatePost$ = this.actions.pipe(
		ofType(postActions.UPDATE_POST),
		map((action: postActions.UpdatePost) => action.payload),
		mergeMap((post: Post) => this.postService.update(post, post.id)),
		map(() => new postActions.UpdatePostSuccess())
	);

	@Effect()
	removePost$ = this.actions.pipe(
		ofType(postActions.REMOVE_POST),
		map((action: postActions.RemovePost) => action.payload),
		mergeMap((id: number) => this.postService.remove(id)),
		map(() => new postActions.RemovePostSuccess())
	);

	@Effect({ dispatch: false })
	goToListPosts$ = this.actions.pipe(
		ofType(postActions.CREATE_POST_SUCCESS, postActions.UPDATE_POST_SUCCESS, postActions.REMOVE_POST_SUCCESS),
		tap(() => this.router.navigate([ '/posts' ]))
	);

	@Effect()
	removePostSuccess$ = this.actions.pipe(
		ofType(postActions.REMOVE_POST_SUCCESS),
		map(() => new postActions.GetPosts())
	);
}
