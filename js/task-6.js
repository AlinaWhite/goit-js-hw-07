function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const valuInput = document.querySelector('input');
const creatButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');

creatButton.addEventListener('click', addBoxes);
destroyButton.addEventListener('click', destroyBoxes);


function createBoxes (amaunt) {
  let size = 30;
  const boxes = [];

  for (let index = 0; index < amaunt; index++) {
    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};" </div> `
    size +=10;
    boxes.push(box);
  }

  boxContainer.insertAdjacentHTML('beforeend', boxes.join(''));
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
  }

function addBoxes(){
  if(+valuInput.value < 1 || +valuInput.value > 100) {
    return alert('Value out of range');
      }
  destroyBoxes();
  createBoxes(valuInput.value);
  valuInput.value = '';
}