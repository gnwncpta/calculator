// import './Calculator.css';
import { $, log } from '../Fazt/Fazt';
import ToggleDark from '../DarkMode/DarkMode';
import calculateAll from '../Calculate/CalculateAll';

// tempat untuk menyimpan angka dan operator
let numbers = [];

// DOM Selection
const buttons = $.querySelectorAll('.button-grid button');
const display = $.querySelector('.display');
const displayP = $.querySelector('.display p');
const clear = $.querySelector('.clear');
const mode = $.querySelector('.mode');
const buttonGrid = $.querySelector('.button-grid');
const numbersButton = $.querySelectorAll('.button-grid .active');
const blackOverlay = $.querySelector('.black-overlay');
const modalContainer = $.querySelector('.modal-container');
const modalInfo = $.querySelector('.modal-container .modal-info');
const modalInfoButton = $.querySelector('.modal-container .modal-info button');


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

// Looping semua button untuk nantinya di select
buttons.forEach(button => {

    // jika ada button yang di select 
    button.addEventListener('click', (e) => {
        
        // Jika yang diklik adalah sama dengan ( = ) maka kalkulasi
        if(e.target.classList.contains('equals')){
            if(numbers.length == 0){
                blackOverlay.classList.remove('hidden');
                modalContainer.classList.remove('hidden');
            } else {
                displayP.innerHTML = calculateAll(numbers);
                displayP.classList.add('hidden');
    
                setTimeout(() => {
                    displayP.classList.remove('hidden');
                }, 100);
            }
            
        // tapi selain tombol = yang di klik 
        } else {

            // tampilkan ke DOM
            let number = e.target.textContent; // <- berisi angka, operator
            displayP.textContent += number; // <- tampilkan ke DOM

            // dan setor ke Array nilainya untuk di kalkulasi
            // jika yang di klik adalah operator expression push
            if(number === "+" || number === "-" || number === "*" || number === "/"){
                numbers.push(number);
            } else {
                numbers.push(parseInt(number)); // masukkan nilai ke array menjadi tipe number
            }

        }
    });
})

// Reset Calculator
clear.addEventListener('click', () => {
    numbers.length = 0;
    displayP.innerHTML = '';
})

export { mode, displayP, display, buttonGrid, numbersButton, modalContainer, modalInfo, modalInfoButton }