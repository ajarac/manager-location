import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
	name: 'dateFromNow'
})
export class DateFromNow implements PipeTransform {
	transform(value: string): string {
		return moment(value).fromNow() || '';
	}
}
