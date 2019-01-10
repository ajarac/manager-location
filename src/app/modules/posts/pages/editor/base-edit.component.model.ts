import { FormGroup } from '@angular/forms';
import { Post } from '@core/models';

export interface BaseEditComponentImpl {
	formGroup: FormGroup;
	title: string;
	save(): void;
	initForm(post?: Post): void;
	goBack(): void;
}
