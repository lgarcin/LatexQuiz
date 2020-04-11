import { Component } from "@angular/core";
import { render } from 'katex'
import { KatexOptions } from 'ng-katex';

import questions from '../app/questions/questions.json'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  nb = 0;
  test = "";
  questions = questions;
  options: KatexOptions = {
    displayMode: true,
    throwOnError: false
  };

  get objectif() {
    return this.questions[this.nb];
  }

  decrease() {
    this.nb--;
    this.test = "";
  }

  increase() {
    this.nb++;
    this.test = "";
  }

  testEquality() {
    try {
      let testElement = document.createElement('object');
      render(this.test, testElement, { throwOnError: false });
      testElement = testElement.querySelector('semantics');
      testElement.removeChild(testElement.querySelector('annotation'))

      let objectifElement = document.createElement('object');
      render(this.objectif, objectifElement, { throwOnError: false });
      objectifElement = objectifElement.querySelector('semantics');
      objectifElement.removeChild(objectifElement.querySelector('annotation'))

      return testElement.isEqualNode(objectifElement);
    }
    catch {
      return false;
    }
  }
}
