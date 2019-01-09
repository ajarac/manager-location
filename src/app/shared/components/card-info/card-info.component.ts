import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-card-info',
	templateUrl: './card-info.component.html',
	styleUrls: [ './card-info.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInfoComponent implements OnInit {
	@Input() title: string;
	@Input() subtitle: string;
	@Input() img?: string;
}
