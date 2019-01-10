import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import * as pages from './pages';

const ROUTES: Routes = [
	{
		path: '',
		component: PostsComponent,
		children: [
			{
				path: '',
				component: pages.ListComponent
			},
			{
				path: 'create',
				component: pages.CreateComponent
			},
			{
				path: ':id',
				component: pages.DetailComponent
			},
			{
				path: ':id/edit',
				component: pages.UpdateComponent
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES) ],
	exports: [ RouterModule ]
})
export class PostsRoutingModule {}
