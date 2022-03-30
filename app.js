
import {Timer} from './timer.js';

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
durationInput.addEventListener('click', () => {
    durationInput.value = '';
})
const back = document.querySelector('body');


const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;


const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        console.log('Timer started');
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        );
        if (timeRemaining > 4) {
            back.style.backgroundColor = 'rgb(60, 179, 0)'

        }
        else if (timeRemaining >= 2){
            back.style.backgroundColor = 'rgb(255, 165, 0)'
            
        }
        else {
            
            back.style.backgroundColor = 'rgb(255, 0, 0)'
            
        }
        
    },
    onComplete() {
        durationInput.value = 'DONE';
    }
});

