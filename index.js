const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    bodyColor: document.body,
};
const INTERVAL_DELAY = 1000;
let intervalColorChange = undefined;

refs.btnStart.addEventListener('click', onStartBtn);
refs.btnStop.addEventListener('click', onStopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtn() {
    intervalColorChange = setInterval(() => {
        refs.bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, INTERVAL_DELAY);
    refs.btnStart.disabled = true;
};
function onStopBtn() {
    clearInterval(intervalColorChange);
    refs.btnStart.disabled = false;
};




