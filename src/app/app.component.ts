import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  test: string;
  objectif = "a^2+b^2=c^2";

  @ViewChild("#res") resdiv: ElementRef;
  @ViewChild("#obj") objdiv: ElementRef;
}
