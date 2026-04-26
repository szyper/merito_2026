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

    // dodawanie zadania klawiszem enter
    this.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handler();
            }
        });
  }

  bindDelete(handler) {
    this.list.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const index = e.target.dataset.index;
        handler(index);
      }
    });
  }

  render(items) {
    this.list.innerHTML = "";

    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item;
      this.list.appendChild(li);

      const btn = document.createElement("button");
      btn.textContent = "X";

      btn.classList.add("delete-btn");

      btn.dataset.index = index;

      li.appendChild(btn);
    });
  }

  updateCounter(count) {
    this.counter.textContent = "Liczba zadań: " + count;
  }
}