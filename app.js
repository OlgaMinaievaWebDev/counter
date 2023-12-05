const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const entriesEl = document.getElementById("entries");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", clearData);

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let entry = `${count} - `;
  entriesEl.textContent += entry;
  reset();
}

function reset() {
  count = 0;
  countEl.textContent = 0;
}

function clearData() {
  count = 0;
  countEl.textContent = 0;
  entriesEl.textContent = "Previous entries: ";
}
