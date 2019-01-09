import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { COMPONENTS } from './components';

@NgModule({
	declarations: [ ...COMPONENTS ],
	imports: [ CommonModule, RouterModule, SharedModule ],
	exports: [ ...COMPONENTS ]
})
export class UiModule {}
