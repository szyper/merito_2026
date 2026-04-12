import { Model } from "./model.js"
import { View } from "./view.js"

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    this.view.bindAdd(() => this.handleAdd());
  }

  handleAdd() {
    const value = this.view.getInputValue();

    if (value.trim() === "") return;

    this.model.addItem(value);
    this.view.render(this.model.getItems());

    this.view.updateCounter(this.model.count());

    this.view.clearInput();
  }  
}