import './styles.css';

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

refs.btnStart.addEventListener('click', start);
refs.btnStop.addEventListener('click', stop);

randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


