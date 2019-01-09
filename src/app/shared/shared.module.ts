import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule } from '@feature/feature.module';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';

@NgModule({
	declarations: [ ...COMPONENTS, ...PIPES ],
	imports: [ CommonModule, FeatureModule ],
	exports: [ FeatureModule, ...COMPONENTS, ...PIPES ]
})
export class SharedModule {}
