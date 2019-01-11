import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment as env } from '@env/environment';

// Services
import { HTTP_SERVICES } from './http';
import { SERVICES } from './services';
import { INTERCEPTORS } from './interceptors/index';

// Redux
import { reducers } from './store';
import { EFFECTS } from './store/effects';
import { GUARDS } from './guards';

@NgModule({
	declarations: [],
	imports: [
		HttpClientModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(EFFECTS),
		!env.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [
		{ provide: 'API_URL', useValue: env.api_url },
		...HTTP_SERVICES,
		...SERVICES,
		...INTERCEPTORS,
		...GUARDS
	]
})
export class CoreModule {}
