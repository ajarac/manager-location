import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EDITORS_COMPONENTS } from './editor';

export const PAGES = [ ListComponent, DetailComponent, ...EDITORS_COMPONENTS ];

export * from './list/list.component';
export * from './detail/detail.component';
export * from './editor';
