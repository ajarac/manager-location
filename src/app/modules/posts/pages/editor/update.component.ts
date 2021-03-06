import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { BaseEditComponent } from './base-edit.component';
import { Validators } from '@angular/forms';

import * as fromStore from '@core/store';
import { filter, tap } from 'rxjs/operators';
import { Post } from '@core/models';

@Component({
	selector: 'app-create',
	templateUrl: './base-edit.component.html',
	styleUrls: [ './base-edit.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateComponent extends BaseEditComponent {
	constructor(injector: Injector) {
		super(injector);
		this.title = 'Update Post';
		this.store
			.select(fromStore.getPostEntity)
			.pipe(filter((post: Post) => !!post), tap((post: Post) => this.initForm(post)))
			.subscribe();
	}

	save(): void {
		this.store.dispatch(new fromStore.UpdatePost(this.formGroup.value));
	}

	initForm(post: Post): void {
		this.formGroup = this.fb.group({
			title: [ post.title, Validators.required ],
			content: [ post.content, Validators.required ],
			image_url: [ post.image_url ],
			lat: [ post.lat ],
			long: [ post.long ],
			id: [ post.id ]
		});
		// this.cdr.detectChanges();
	}
}
