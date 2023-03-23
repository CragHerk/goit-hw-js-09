function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

function startChangingBackgroundColor() {
  const body = document.querySelector('body');
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
  document.querySelector('[data-start]').disabled = true;
}

function stopChangingBackgroundColor() {
  clearInterval(intervalId);
  document.querySelector('[data-start]').disabled = false;
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startChangingBackgroundColor);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopChangingBackgroundColor);
