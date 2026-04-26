export class Model {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item); // model.addItem("zakupy");
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  count() {
    return this.items.length;
  }
}