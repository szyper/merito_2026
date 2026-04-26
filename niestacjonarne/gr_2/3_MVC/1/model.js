export class Model {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item); // model.addItem("zakupy");
  }

  getItems() {
    return this.items;
  }

  count() {
    return this.items.length;
  }
}