import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatCardModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [ CommonModule ],
	exports: [ MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule ]
})
export class FeatureModule {}
