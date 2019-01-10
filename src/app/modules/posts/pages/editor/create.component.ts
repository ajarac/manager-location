import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { BaseEditComponent } from './base-edit.component';
import { Validators } from '@angular/forms';

import * as fromStore from '@core/store';

@Component({
	selector: 'app-create',
	templateUrl: './base-edit.component.html',
	styleUrls: [ './base-edit.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent extends BaseEditComponent {
	constructor(injector: Injector) {
		super(injector);
		this.title = 'Create Post';
		this.initForm();
	}

	save(): void {
		this.store.dispatch(new fromStore.CreatePost(this.formGroup.value));
	}

	initForm(): void {
		this.formGroup = this.fb.group({
			title: [ '', Validators.required ],
			content: [ '', Validators.required ],
			image_url: [ '' ],
			lat: [ '' ],
			long: [ '' ]
		});
	}
}
