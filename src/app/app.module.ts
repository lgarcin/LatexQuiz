import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { KatexModule } from "ng-katex";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, KatexModule, BrowserAnimationsModule, MatButtonModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
