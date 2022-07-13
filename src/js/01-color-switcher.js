function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStartEl = document.querySelector('[data-start]');
const btnStoptEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
// console.log(bodyEl);

btnStartEl.addEventListener('click', onBtnStartClick);
function onBtnStartClick(event) {
  event.target.setAttribute('disabled', true);
  btnStoptEl.removeAttribute('disabled');
  timerId = setInterval(() => {
    // console.log('Helo');
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStoptEl.addEventListener('click', onBtnStopClick);

function onBtnStopClick(event) {
  event.target.setAttribute('disabled', true);
  btnStartEl.removeAttribute('disabled');
  clearInterval(timerId);
  //   console.log(`Interval with id ${timerId} has stopped!`);
}
