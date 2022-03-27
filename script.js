"use strict"


const normalMode = document.getElementById("normalMode");
const rainbowMode = document.getElementById("rainbowMode");
// const opcaityMode = document.getElementById("opacityMode");
const reset = document.getElementById("reset");
const rightside = document.querySelector(".rightside");

let randomRgb = function() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let playGame = function(size, mode) {
    rightside.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    rightside.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
    
    for(let i = 1; i <= size*size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', event => {
            if(mode === "normal") {
                square.style.backgroundColor = 'black';
            }
            else if(mode === "rainbow") {
                square.style.backgroundColor = randomRgb();
            }
            // else if(mode === "opacity") {
            //     if(square.attributes.length === 0) {
            //         square.setAttribute('opac', 10);
            //         square.style.filter = 'brightness(' + 10% +')';
            //     }
            //     else if(square.getAttribute('opac') < 100){
            //         square.setAttribute('opac', (getAttribute + 10));
            //         square.style.filter = 'brightness(' + (100 - square.getAttribute('opac') +')');
            //     }
            //     else {
            //         square.style.filter = 'brightness(' + 100 +')';
            //     }

            }
        )
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
        playGame(newSize,"normal");
    }
    else {
        alert("Incorrect size. Default mode of 16 game will start.")
        playGame(16,"normal")
    }
});

normalMode.addEventListener("click", function() {
    while(rightside.firstChild) {
        rightside.removeChild(rightside.firstChild);
    }
    let newSize = prompt("Create a new board size between 2-100.")
    if(newSize >= 2 && newSize <= 100) {
        playGame(newSize,"normal");
    }
    else {
        alert("Incorrect size. Default mode of 16 game will start.")
        playGame(16, "normal")
    }
});

rainbowMode.addEventListener("click", function() {
    while(rightside.firstChild) {
        rightside.removeChild(rightside.firstChild);
    }
    let newSize = prompt("Create a new board size between 2-100.")
    if(newSize >= 2 && newSize <= 100) {
        playGame(newSize, "rainbow");
    }
    else {
        alert("Incorrect size. Default mode of 16 game will start.")
        playGame(16, "normal")
    }
});

// opacityMode.addEventListener("click", function() {
//     while(rightside.firstChild) {
//         rightside.removeChild(rightside.firstChild);
//     }
//     let newSize = prompt("Create a new board size between 2-100.")
//     if(newSize >= 2 && newSize <= 100) {
//         playGame(newSize, "opacity");
//     }
//     else {
//         alert("Incorrect size. Default mode of 16 game will start.")
//         playGame(16, "normal")
//     }
// });