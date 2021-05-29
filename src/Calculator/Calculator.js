import './Calculator.css';
import { $, log } from '../Fazt/Fazt';
import ToggleDark from '../DarkMode/DarkMode';
import calculateAll from '../Calculate/CalculateAll';

// tempat untuk menyimpan angka dan operator
let numbers = [];

// DOM Selection
const buttons = $.querySelectorAll('.button-grid button');
const p = $.querySelector('.display p');
const clear = $.querySelector('.clear');
const mode = $.querySelector('.mode');

// jika localStorage memiliki mode dark maka atur menjadi tampilan dark mode
if(localStorage.getItem('mode') == 'dark'){
    ToggleDark();
}

// jika yang di klik adalah tombol toggle dark mode
mode.addEventListener('click', () => {
    ToggleDark();
});

// Looping semua button untuk nantinya di select
buttons.forEach(button => {

    // jika ada button yang di select 
    button.addEventListener('click', (e) => {
        
        // Jika yang diklik adalah sama dengan maka kalkulasi
        if(e.target.classList.contains('equals')){
            p.innerHTML = calculateAll(numbers);
            
        // tapi selain tombol = yang di klik 
        } else {

            // tampilkan ke DOM
            let number = e.target.textContent; // <- berisi angka, operator
            p.textContent += number; // <- tampilkan ke DOM

            // dan setor ke Array nilainya untuk di kalkulasi
            // jika yang di klik adalah operator expression push
            if(number === "+" || number === "-" || number === "x" || number === "/"){
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
    p.innerHTML = '';
})

export { mode, p }