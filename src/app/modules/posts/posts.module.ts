// SECRET
import { GOOGLE_KEYS } from '../../../../google';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '@shared/shared.module';
import { PostsRoutingModule } from './posts.routing';

import { PostsComponent } from './posts.component';
import { PAGES } from './pages';
import { COMPONENTS } from './components';

@NgModule({
	declarations: [ PostsComponent, ...PAGES, ...COMPONENTS ],
	imports: [
		CommonModule,
		PostsRoutingModule,
		SharedModule,
		AgmCoreModule.forRoot({
			apiKey: GOOGLE_KEYS.map
		})
	]
})
export class PostsModule {}
