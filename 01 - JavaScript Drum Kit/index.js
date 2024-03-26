"use strict";

// First version

// function makeEvents(){
//     const btnKeys = document.querySelectorAll('.key');
//     const kbdKeys = document.querySelectorAll('kbd')
//     document.body.addEventListener('keydown', (event) => {
//         kbdKeys.forEach((key) => {
//             if (key.textContent === event.key.toUpperCase()){
//                 key.parentNode.classList.toggle('playing')
//                 const parent = key.parentNode.dataset.key
//                 const audio = document.querySelector(`audio[data-key="${parent}"]`)
//                 audio.play();
//                 setTimeout(() => {
//                     key.parentNode.classList.toggle('playing')
//                 }, 100)
//             }
//         })
//     })
// }
//
// makeEvents()

// Second version

window.addEventListener('keydown', playSound);

function playSound(event){
    const audio = document.querySelector(`audio[data-key='${event.key}']`)
    const key = document.querySelector(`div[data-key='${event.key}']`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event){
    if(event.propertyName !== 'transform') return; // skip if it's not transform
    // console.log(event.propertyName)
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))