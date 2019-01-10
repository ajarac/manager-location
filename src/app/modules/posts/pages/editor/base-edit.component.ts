import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseEditComponentImpl } from './base-edit.component.model';

import * as fromStore from '@core/store';
import { Post } from '@core/models';

export abstract class BaseEditComponent implements BaseEditComponentImpl {
	formGroup: FormGroup;
	title: string;
	protected fb: FormBuilder;
	protected store: Store<fromStore.State>;
	private router: Router;

	constructor(private injector: Injector) {
		this.fb = this.injector.get<FormBuilder>(FormBuilder);
		this.store = this.injector.get<Store<fromStore.State>>(Store);
		this.router = this.injector.get<Router>(Router);
	}

	abstract save(): void;
	abstract initForm(post?: Post): void;

	goBack(): void {
		this.router.navigate([ '/posts' ]);
	}
}
