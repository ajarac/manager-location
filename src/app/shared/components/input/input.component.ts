import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: [ './input.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
	@Input() control: FormControl = new FormControl();
	@Input() placeholder: string;
}
