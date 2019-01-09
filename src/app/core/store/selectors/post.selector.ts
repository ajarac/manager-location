import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityCollection, Post } from '@core/models';

import * as fromPosts from '../reducers/post.reducer';

export const postState = createFeatureSelector<fromPosts.PostState>('posts');

export const getPostEntities = createSelector(postState, fromPosts.getEntities);

export const getPostList = createSelector(getPostEntities, (colPosts: EntityCollection<Post>) =>
	Object.keys(colPosts).map((id: string) => colPosts[id])
);

export const getEntity = createSelector(postState, fromPosts.getEntity);
