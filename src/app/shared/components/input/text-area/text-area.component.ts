import { Component } from '@angular/core';
import { InputComponent } from '../input.component';

@Component({
	selector: 'app-input-textarea',
	templateUrl: 'text-area.component.html',
	styleUrls: [ '../input.component.scss' ]
})
export class TextAreaComponent extends InputComponent {}
