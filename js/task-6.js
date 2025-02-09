function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestroy = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');
btnCreate.addEventListener('click', () => {
  if (input.value <= 100 && input.value >= 1) {
    destroyBoxes();
    createBoxes(input.value);
  }
});
let allDiv = [];
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const d = 30 + 10 * i;
    div.style.width = d + 'px';
    div.style.height = d + 'px';
    div.style.backgroundColor = getRandomHexColor();
    allDiv.push(div);
  }
  boxes.append(...allDiv);
}
function destroyBoxes() {
  allDiv.forEach(div => div.remove());
  allDiv = [];
}
btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});
