export class View {
  constructor() {
    this.input = document.getElementById("input");
    this.button = document.getElementById("btn");
    this.list = document.getElementById("list");
    this.counter = document.getElementById("counter");
  }

  getInputValue() {
    return this.input.value;
  }

  clearInput() {
    this.input.value = "";
  }

  bindAdd(handler) {
    this.button.addEventListener("click", handler);
  }

  render(items) {
    this.list.innerHTML = "";

    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      this.list.appendChild(li);
    });
  }

  updateCounter(count){
    this.counter.textContent = "Liczba zadań: " + count;
  }
}