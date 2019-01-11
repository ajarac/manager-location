import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import * as pages from './pages';
import * as guards from '@core/guards';

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
				component: pages.DetailComponent,
				canActivate: [ guards.PostGuard ]
			},
			{
				path: ':id/edit',
				component: pages.UpdateComponent,
				canActivate: [ guards.PostGuard ]
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES) ],
	exports: [ RouterModule ]
})
export class PostsRoutingModule {}
