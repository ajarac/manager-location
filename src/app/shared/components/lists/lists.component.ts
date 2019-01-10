import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef, Input } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
	selector: 'app-lists',
	templateUrl: './lists.component.html',
	styleUrls: [ './lists.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsComponent<T> {
	@Input() dataList: Array<T>;

	@ContentChild(TemplateRef) public itemTmpl: TemplateRef<NgForOfContext<T>>;
}
