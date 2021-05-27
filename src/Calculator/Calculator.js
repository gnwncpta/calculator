import './Calculator.css';
import { $, log } from '../Fazt/Fazt';
import ToggleDark from '../DarkMode/DarkMode';
import calculateAll from '../Calculate/CalculateAll';

let numbers = [];

const buttons = $.querySelectorAll('.button-grid button');
const p = $.querySelector('.display p');
const clear = $.querySelector('.clear');
const mode = $.querySelector('.mode');

if(localStorage.getItem('mode') == 'dark'){
    ToggleDark();
}

mode.addEventListener('click', () => {
    ToggleDark();
});

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        if(e.target.classList.contains('equals')){
            calculateAll(numbers);
        } else {
            let number = e.target.textContent;
            p.textContent += number;

            // push to numbers array
            if(number === "+"){
                numbers.push(number);
            } else {
                numbers.push(parseInt(number));
            }

        }
    });
})

// Reset Calculator
clear.addEventListener('click', () => {
    numbers.length = 0;
    p.innerHTML = '';
})

export { mode, p }