import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as fromStore from '@core/store';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
	constructor(private store: Store<fromStore.State>) {}

	ngOnInit() {}
}
