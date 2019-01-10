import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FeatureModule } from '@feature/feature.module';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';

@NgModule({
	declarations: [ ...COMPONENTS, ...PIPES ],
	imports: [ CommonModule, FeatureModule, ReactiveFormsModule ],
	exports: [ FeatureModule, ReactiveFormsModule, ...COMPONENTS, ...PIPES ]
})
export class SharedModule {}
