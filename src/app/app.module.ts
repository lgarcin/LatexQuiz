import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { KatexModule } from "ng-katex";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, KatexModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
