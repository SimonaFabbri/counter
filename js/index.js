let number;
let more = document.getElementById("increase");
let less = document.getElementById("decrease");
let display = document.getElementById("display");

updateCounter(0);

function render(x) {
  display.innerHTML = x;
}
function updateCounter(x) {
  number = x;
  render(number);
}

more.onclick = function add() {
  updateCounter(number + 1);
};
less.onclick = function subtract() {
  updateCounter(number - 1);
};
