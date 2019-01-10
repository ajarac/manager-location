import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '@core/models';

@Component({
	selector: 'app-card-post',
	templateUrl: './card-post.component.html',
	styleUrls: [ './card-post.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPostComponent {
	@Input() post: Post;
	@Input() showActions?: boolean = true;

	@Output() detail: EventEmitter<void> = new EventEmitter<void>();
	@Output() update: EventEmitter<void> = new EventEmitter<void>();
	@Output() delete: EventEmitter<void> = new EventEmitter<void>();

	actions: string[] = [ 'visibility', 'edit', 'delete' ];

	clickAction(action: string): void {
		switch (action) {
			case 'visibility':
				this.detail.emit();
				break;
			case 'edit':
				this.update.emit();
				break;

			case 'delete':
				this.delete.emit();
				break;
		}
	}
}
