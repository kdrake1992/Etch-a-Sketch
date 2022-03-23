"use strict"

const rightside = document.querySelector(".rightside");
rightside.style.gridTemplateColumns = 'repeat(16, 1fr)';
rightside.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let i = 1; i <= 16*16; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', event => {
        square.style.backgroundColor = 'black';
    })
    rightside.insertAdjacentElement("beforeend", square)
}