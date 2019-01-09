import { Action } from '@ngrx/store';
import { Post } from '@core/models';

export const GET_POSTS = '[POSTS-UI] Get Posts';
export const GET_POSTS_SUCCESS = '[POSTS-API] Get Posts Success';

export const GET_POST_BY_ID = '[POSTS-UI] Get Post By Id';
export const GET_POST_BY_ID_SUCCESS = '[POSTS-API] Get Post By Id Success';

export const CREATE_POST = '[POSTS-UI] Create Post';
export const CREATE_POST_SUCCESS = '[POSTS-API] Create Post Success';

export const UPDATE_POST = '[POSTS-UI] Update Post';
export const UPDATE_POST_SUCCESS = '[POSTS-API] Update Post Success';

export const REMOVE_POST = '[POSTS-UI] Remove Post';
export const REMOVE_POST_SUCCESS = '[POSTS-API] Remove Post Success';

export class GetPosts implements Action {
	readonly type: string = GET_POSTS;
}

export class GetPostsSuccess implements Action {
	readonly type: string = GET_POSTS_SUCCESS;
	constructor(public payload: Post[]) {}
}

export class GetPostById implements Action {
	readonly type: string = GET_POST_BY_ID;
	constructor(public payload: number) {}
}

export class GetPostByIdSuccess implements Action {
	readonly type: string = GET_POST_BY_ID_SUCCESS;
	constructor(public payload: Post) {}
}

export class CreatePost implements Action {
	readonly type: string = CREATE_POST;
	constructor(public payload: Post) {}
}

export class CreatePostSuccess implements Action {
	readonly type: string = CREATE_POST_SUCCESS;
}

export class UpdatePost implements Action {
	readonly type: string = UPDATE_POST;
	constructor(public payload: Post) {}
}

export class UpdatePostSuccess implements Action {
	readonly type: string = UPDATE_POST_SUCCESS;
}

export class RemovePost implements Action {
	readonly type: string = REMOVE_POST;
	constructor(public payload: number) {}
}

export class RemovePostSuccess implements Action {
	readonly type: string = REMOVE_POST_SUCCESS;
}

export type PostActions =
	| GetPosts
	| GetPostsSuccess
	| GetPostById
	| GetPostByIdSuccess
	| CreatePost
	| CreatePostSuccess
	| UpdatePost
	| UpdatePostSuccess
	| RemovePost
	| RemovePostSuccess;
