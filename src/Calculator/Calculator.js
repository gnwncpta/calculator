import './Calculator.css';
import { $, log as print } from '../Fazt/Fazt';
import ToggleDark from '../DarkMode/DarkMode';
import { add, count } from '../Count/Count';

// DOM Selection
const buttons = $.querySelectorAll('.button-grid button');
const display = $.querySelector('.display');
const displayP = $.querySelector('.display p');
const mode = $.querySelector('.mode');
const buttonGrid = $.querySelector('.button-grid');
const numbersButton = $.querySelectorAll('.button-grid .number');
const operatorButton = $.querySelectorAll('.button-grid .operator');
const clearButton = $.querySelector('.clear');
const calculateButton = $.querySelector('.button-grid button.equals');
const blackOverlay = $.querySelector('.black-overlay');
const modalContainer = $.querySelector('.modal-container');
const modalInfo = $.querySelector('.modal-container .modal-info');
const modalInfoButton = $.querySelector('.modal-container .modal-info button');

// print(calculateButton)

/* jika localStorage memiliki mode dark
maka atur tampilan menjadi dark mode */
if(localStorage.getItem('mode') == 'dark'){
    ToggleDark();
}

// jika yang di klik adalah tombol toggle dark mode
mode.addEventListener('click', () => {
    ToggleDark();
});

modalInfoButton.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.add('hidden');
    blackOverlay.classList.add('hidden');
});

// tempat untuk menyimpan angka dan operator
let numbers = [];

// if numbers button is clicked.
numbersButton.forEach(number => {
    number.addEventListener('click', (e) => {
        let value = e.target.textContent;
        displayP.textContent += value;
        numbers.push(parseInt(value));
    });
});

// if some operators is clicked.
operatorButton.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let operator = e.target.textContent;
        displayP.textContent += operator;
        numbers.push(operator);
    });
});

// Reset Calculator
clearButton.addEventListener('click', () => {
    numbers.length = 0;
    displayP.innerHTML = '';
});

// if calculate button is clicked.
calculateButton.addEventListener('click', () => {
    if(numbers.length == 0){
        print('the numbers is empty!');
        blackOverlay.classList.remove('hidden');
        modalContainer.classList.remove('hidden');
    } else {
        let result = count(numbers);
        // print(result);
        displayP.innerHTML = result;
        displayP.classList.add('hidden');

        setTimeout(() => {
            displayP.classList.remove('hidden');
        }, 100);

        numbers.length = 0;
        numbers.push(result);
        // print(`Array numbers = ${numbers}`);
    }
});

export { mode, displayP, display, buttonGrid, numbersButton, modalContainer, modalInfo, modalInfoButton }