function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const battunChenge = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

const colorMix = () => {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;
}

battunChenge.addEventListener('click', colorMix);