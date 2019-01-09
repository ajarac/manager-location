import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Post } from '@core/models';

@Component({
	selector: 'app-card-post',
	templateUrl: './card-post.component.html',
	styleUrls: [ './card-post.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPostComponent {
	@Input() post: Post;
}
