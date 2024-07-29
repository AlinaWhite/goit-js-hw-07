const nameInput = document.querySelector('#name-input');
const personName = document.querySelector('#name-output');

const nameChenge = () => {
  const userName = nameInput.value.trim();
  if (userName === '') {
    personName.textContent = 'Anonymous'
  } else {personName.textContent = userName} ;
 
};

nameInput.addEventListener('input', nameChenge);