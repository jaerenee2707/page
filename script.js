const text = document.querySelector('.typing-animation').textContent;
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
context.font = '5em "Bebas Neue"';
const textWidth = context.measureText(text).width;

const style = document.createElement('style');
style.textContent = `
  @keyframes typing {
    from {
      width: 0
    }
    to {
      width: ${textWidth * 1.535}px;
    }
  }
`;
document.head.appendChild(style);

const hearts = document.querySelectorAll('.hearts');
const span = document.createElement('span');
span.textContent = '♡';
document.body.appendChild(span);
const heartWidth = span.offsetWidth;
document.body.removeChild(span);

const screenWidth = window.innerWidth * 0.9;
const numHearts = Math.floor(screenWidth / heartWidth);
hearts.forEach(heart => {
  heart.textContent = '♡'.repeat(numHearts);
});

const searching = document.querySelector('.autocomplete');
const icon = document.querySelector('.icon');
let clicked = false;
searching.addEventListener('focus', () => {
  if (!clicked) {
    icon.innerHTML = "🤔";
  }
});
searching.addEventListener('blur', () => {
  if (!clicked) {
    icon.innerHTML = "🧐";
  }
});
icon.addEventListener('mouseover', () => {
  if (!clicked) {
    icon.innerHTML = "🫣"
  }
});
icon.addEventListener('mouseout', () => {
  if (!clicked) {
    icon.innerHTML = "🧐"
  }
});
icon.addEventListener('click', () => {
  clicked = true;
  icon.innerHTML = "🤬"
  setTimeout(() => {
    icon.innerHTML = "🧐";
    clicked = false;
  }, 2000);
});


let CScontainer = document.querySelector('.CScontainer');
let originalHeightCS = 200;
let originalWidthCS = 400;

let TTTcontainer = document.querySelector('#TTT');
let originalHeightTTT = 380;
let originalWidthTTT = 300;

let PGcontainer = document.querySelector('#PG');
let originalWidthPG = 360;

let RPScontainer = document.querySelector('#RPS');
let originalWidthRPS = 400;

if (window.innerHeight < window.innerWidth) {
  let newHeight = window.innerHeight * 0.7;
  let scaleValueCS = newHeight / originalHeightCS;
  let scaleValueTTT = newHeight / originalHeightTTT;
  CScontainer.style.transform = `translate(-50%, -50%) scale(${scaleValueCS})`;
}
else {
  let newWidth = window.innerWidth * 0.8;
  let newHeight = window.innerHeight * 0.8;
  let scaleValueTTT = newHeight / originalHeightTTT;
  let scaleValueCS = newWidth / originalWidthCS;
  let scaleValuePG = newWidth / originalWidthPG;
  let scaleValueRPS = newWidth / originalWidthRPS;
  CScontainer.style.transform = `translate(-50%, -50%) scale(${scaleValueCS})`;
  TTTcontainer.style.transform = `scale(${scaleValueTTT})`;
  PGcontainer.style.transform = `scale(${scaleValuePG})`;
  RPScontainer.style.transform = `scale(${scaleValueRPS})`;
}


