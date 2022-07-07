// script.js

window.addEventListener('keydown', keyPressed);
const keys = Array.from(document.querySelectorAll('.button'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function keyPressed(event) {
    // console.log(event.code);
    const key = document.querySelector(`[data-key="${event.code}"]`);
    if(key !== null) {
        // console.log(key);
        key.classList.add('button-pressed');
    }
}

function removeTransition(event) {
    console.log(event)
    if(event.propertyName == "transform") {
        event.target.classList.remove('button-pressed');
    }
}