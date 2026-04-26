export class Model {
  constructor(){
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  count() {
    return this.items.length;
  }
}