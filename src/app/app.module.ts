import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, UiModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
