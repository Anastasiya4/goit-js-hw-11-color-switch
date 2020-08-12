'use strict'

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
  }

let timeId = null;

  refs.btnStart.addEventListener('click', backgroundColorChanger);
  refs.btnStop.addEventListener('click', stopBackgroundChanger);


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function backgroundColorChanger () {
  timeId = setInterval(() => {
    refs.btnStart.setAttribute('disabled', 'disabled');
    refs.body.setAttribute('background-color', colors[randomIntegerFromInterval(0, colors.length)]);
  }, 1000);
  }

  function stopBackgroundChanger (){
      refs.btnStart.removeAttribute('disabled');
      clearInterval(timeId);
  }
