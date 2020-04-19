import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule,
		FormsModule,
		KatexModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatListModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		LayoutModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
