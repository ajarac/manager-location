import { Post, EntityCollection } from '@core/models';
import * as fromPost from '../actions/post.action';

export interface PostState {
	entities: EntityCollection<Post>;
	ids: number[];
	post: Post;
}

export const initialState: PostState = {
	entities: {},
	ids: [],
	post: null
};

export function reducer(state: PostState = initialState, action: fromPost.PostActions): PostState {
	switch (action.type) {
		case fromPost.GET_POSTS_SUCCESS: {
			const posts: Post[] = (<fromPost.GetPostsSuccess>action).payload;

			const entities: EntityCollection<Post> = posts.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {});
			const ids: number[] = posts.map((post: Post) => post.id);
			return {
				...state,
				entities,
				ids
			};
		}

		case fromPost.GET_POST_BY_ID_SUCCESS: {
			const post: Post = (<fromPost.GetPostByIdSuccess>action).payload;
			return {
				...state,
				post
			};
		}

		default: {
			return state;
		}
	}
}

export const getEntities = (state: PostState) => state.entities;
export const getIds = (state: PostState) => state.ids;
export const getEntity = (state: PostState) => state.post;
