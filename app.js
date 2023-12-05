const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

let count = 0;

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener('click', save);

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
 console.log(count)
}
