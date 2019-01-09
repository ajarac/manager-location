import { ActionReducerMap } from '@ngrx/store';

import * as fromPosts from './reducers/post.reducer';

export interface State {
	// insurance: fromInsurance.InsuranceState;
	posts: fromPosts.PostState;
}

export const reducers: ActionReducerMap<State> = {
	// insurance: fromInsurance.reducer
	posts: fromPosts.reducer
};

export * from './actions';
export * from './selectors';
