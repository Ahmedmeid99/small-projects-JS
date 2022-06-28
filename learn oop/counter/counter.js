//////////////////////////////
// Creat Counter
class Counter {
  constructor(value) {
    this.value = value;
  }
  addOne() {
    this.value += 1;
  }
  removeOne() {
    this.value -= 1;
  }
  reset() {
    this.value = 0;
  }
}
const numberEl = document.querySelector(".number");
const addOneBtn = document.querySelector("#add-one");
const removeOneBtn = document.querySelector("#remove-one");
const resetBtn = document.querySelector("#reset");
const counter = new Counter(0);
const render = () => {
  numberEl.textContent = counter.value;
};
addOneBtn.addEventListener("click", () => {
  counter.addOne();
  render();
});
removeOneBtn.addEventListener("click", () => {
  counter.removeOne();
  render();
});
resetBtn.addEventListener("click", () => {
  counter.reset();
  render();
});
counter.addOne();
counter.addOne();
console.log(counter.value);
counter.removeOne();
console.log(counter.value);
counter.reset();
console.log(counter.value);
