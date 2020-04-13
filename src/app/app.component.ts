import { Component } from "@angular/core";
import { render } from 'katex'
import { KatexOptions } from 'ng-katex';

import { categoryNames, categoryQuestions, Category } from './questions/questions.js'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private _category: Category;
  private _counter: number;
  private _userInput: string;

  categoryNames = categoryNames;
  questions = categoryQuestions;
  options: KatexOptions = {
    displayMode: true,
    throwOnError: false
  };

  constructor() {
    this.userInput = "";
    this.category = Category.BASICS;
    this.counter = +localStorage.getItem(JSON.stringify(this.category));
  }

  get userInput() {
    return this._userInput;
  }

  set userInput(val) {
    this._userInput = val;
  }

  get category() {
    return this._category;
  }

  set category(val) {
    this.userInput = "";
    this._category = val;
    this.counter = +localStorage.getItem(JSON.stringify(this.category));
  }

  get counter() {
    return this._counter
  }

  set counter(val) {
    this.userInput = "";
    this._counter = val;
    localStorage.setItem(JSON.stringify(this.category), this.counter.toString());
  }

  get objectif() {
    return this.questions[this.category][this.counter];
  }

  private katexElement(katexString: string) {
    let element = document.createElement('object');
    render(katexString, element, { throwOnError: false });
    element = element.querySelector('semantics');
    element.removeChild(element.querySelector('annotation'))
    return element;
  }

  testEquality() {
    try {
      let userInputElement = this.katexElement(this.userInput);
      let objectifElement = this.katexElement(this.objectif);
      return userInputElement.isEqualNode(objectifElement);
    }
    catch {
      return false;
    }
  }
}
