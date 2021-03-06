const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000'
const DEFAULT_MODE = 'color'


let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

function setCurrentSize(newSize) {
        currentSize = newSize
      };

function setCurrentColor(newColor) {
        currentColor = newColor
};

function setCurrentMode(newMode) {
        currentMode = newMode;
};

const divContainer = document.querySelector('#container');
const log = console.log;
const clearBtn = document.querySelector('#clearBtn');
const changeBtn = document.querySelector('#popBTN');
const colorPicker = document.querySelector('#colorPicker');
const eraserBtn = document.querySelector('#eraserBTN');


eraserBtn.onclick = () => changeMode();
clearBtn.onclick = () => clearAll();
changeBtn.onclick = () => changeSize();
colorPicker.onchange = (e) => setCurrentColor(e.target.value)


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
document.body.ondragstart = () => (ondragstart = false)

function getGrid(size) {
        divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for (let i=1; i<=size*size; i++) {
        let divBoxes = document.createElement('div');
        divBoxes.className = 'boxes';
        divBoxes.addEventListener('mousedown', changeColor)
        divBoxes.addEventListener('mouseover', changeColor)
        divContainer.appendChild(divBoxes);
        };
};

function clearContainer() {
        divContainer.innerHTML = '';
}

function reloadGrid () {
        clearContainer();
        getGrid(currentSize);
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

function changeMode() {
        if (currentMode === 'color') {
                eraserBtn.textContent = 'Pencil';
        setCurrentMode('eraser');
        }
        else if (currentMode === 'eraser') {
                eraserBtn.textContent = 'Eraser';
                setCurrentMode('color');
        }
}


function changeColor (e) {
        if (e.type === 'mouseover' && !mouseDown) return
        if (currentMode === 'color') {e.target.style.backgroundColor = currentColor}
        else if (currentMode === 'eraser') {e.target.style.backgroundColor = ''};
   }



function clearAll () {
        const box = document.querySelectorAll('.boxes');
        box.forEach((box) => { box.style.backgroundColor = ''; });
}

window.onload = () => {
        getGrid(DEFAULT_SIZE);
}