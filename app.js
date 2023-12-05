const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");

let count = 0;

incrementBtn.addEventListener("click", increment);

function increment() {
  count++;
  countEl.textContent = count;
}
