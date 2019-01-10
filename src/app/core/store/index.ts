import { ActionReducerMap } from '@ngrx/store';

import * as fromPosts from './reducers/post.reducer';

export interface State {
	posts: fromPosts.PostState;
}

export const reducers: ActionReducerMap<State> = {
	posts: fromPosts.reducer
};

export * from './actions';
export * from './selectors';
