import { Injectable, Injector } from '@angular/core';

import { BaseService } from './base.service';
import { Post } from '@core/models';

@Injectable()
export class PostService extends BaseService<Post> {
	private static RESOURCE: string = 'posts';

	constructor(injector: Injector) {
		super(injector, PostService.RESOURCE);
	}
}
