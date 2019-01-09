import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ILinkPage {
	title: string;
	icon: string;
	route: string[];
}

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: [ './sidenav.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
	links: ILinkPage[] = [
		{
			title: 'Posts',
			icon: 'home',
			route: [ '/posts' ]
		},
		{
			title: 'Create Post',
			icon: 'edit',
			route: [ '/posts', 'create' ]
		}
	];
}
