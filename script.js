"use strict"

let reset = document.getElementById("reset");
const rightside = document.querySelector(".rightside");

let playGame = function(size) {
    rightside.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    rightside.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
    
    for(let i = 1; i <= size*size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', event => {
            square.style.backgroundColor = 'black';
        })
        rightside.insertAdjacentElement("beforeend", square)
    }
}

playGame(16);

reset.addEventListener("click", function() {
    while(rightside.firstChild) {
        rightside.removeChild(rightside.firstChild);
    }
    let newSize = prompt("Create a new board size between 2-100.")
    if(newSize >= 2 && newSize <= 100) {
        playGame(newSize);
    }
    else {
        alert("Incorrect size. Default size of 16 will show.")
        playGame(16.
    }
});