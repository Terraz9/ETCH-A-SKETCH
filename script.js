const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000'
const DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

function setCurrentSize(newSize) {
        currentSize = newSize
      }

const divContainer = document.querySelector('#container');
const log = console.log;
const clearBtn = document.querySelector('#clearBtn');
const changeBtn = document.querySelector('#popBTN');


clearBtn.onclick = () => clearAll();
changeBtn.onclick = () => changeSize();

function getGrid(size) {
 divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 for (let i=1; i<=size*size; i++) {
 let divBoxes = document.createElement('div');
 divBoxes.className = 'boxes';
 divBoxes.style.border = '1px solid';
 divContainer.appendChild(divBoxes);
 };
};

function clearContainer() {
        divContainer.innerHTML = '';
}

function reloadGrid () {
        clearContainer();
        getGrid(currentSize);
        paint();
}
function changeSize() {
 let sizeValue = prompt('Write a Number between 1 and 100');
 if (sizeValue >= 1 && sizeValue <= 100) {
        setCurrentSize(sizeValue);
        reloadGrid();
 }
 else {
        return alert('The value must be a number between 1 and 100');
 }
};

function paint () {
 const box = document.querySelectorAll('.boxes');
  box.forEach((box) => {
  box.addEventListener('click', function() {
   if (box.style.backgroundColor == ''){
      box.style.backgroundColor = 'black';
   }
   else if (box.style.backgroundColor == 'black') {
           box.style.backgroundColor = ''
   }
   })
 })
 };
        
        

function clearAll () {
        const box = document.querySelectorAll('.boxes');
        box.forEach((box) => { box.style.backgroundColor = ''; });
}

window.onload = () => {
        getGrid(DEFAULT_SIZE);
        paint();
}