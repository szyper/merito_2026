export class Model {
  constructor() {
    this.items = [];
    this.load();
  }

  addItem(item) {
    this.items.push(item); // model.addItem("test1")
    this.save();
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.save();
  }

  getItems() {
    return this.items
  }

  count() {
    return this.items.length;
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.items));
  }

  load() {
    const data = localStorage.getItem("tasks");
    this.items = data ? JSON.parse(data) : [];
  }
}