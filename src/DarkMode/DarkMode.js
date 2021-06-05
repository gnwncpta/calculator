import { mode, displayP, display, numbersButton, modalContainer, modalInfo, modalInfoButton } from '../Calculator/Calculator';
import { log as print } from '../Fazt/Fazt';

// Toggle Dark Mode
const ToggleDark = () => {

    // body changes the background-color
    document.body.classList.toggle('darkBG');

    // mode button changes the theme
    mode.classList.toggle('text-white');
    mode.classList.toggle('text-dark');
    mode.classList.toggle('btn-dark');
    mode.classList.toggle('btn-white');

    // toggle dark to the display
    display.classList.toggle('text-dark');
    display.classList.toggle('bg-white-1');
    display.classList.toggle('text-white');
    display.classList.toggle('bg-dark');
    // display.classList.toggle('border-1-white');
    // p of the mode display
    displayP.classList.toggle('text-white');

    // modal container changes theme
    modalContainer.classList.toggle('bg-dark');
    modalContainer.classList.toggle('bg-white');
    modalInfo.classList.toggle('text-white');
    modalInfo.classList.toggle('text-dark');
    modalInfoButton.classList.toggle('btn-white');
    modalInfoButton.classList.toggle('btn-dark');
    modalInfoButton.classList.toggle('text-dark');
    modalInfoButton.classList.toggle('text-white');

    // Button Grid
    // buttonGrid.classList.toggle('border-1-white');

    // changes the buttons of calculator
    numbersButton.forEach(isi => {
        isi.classList.toggle('btn-dark');
        isi.classList.toggle('text-white');
        isi.classList.toggle('dark-mode');
    });
    
    // Changes the text for user experience
    if(mode.textContent == 'Dark Mode'){
        mode.textContent = 'Light Mode';
        localStorage.setItem('mode', 'dark');
    } else if(mode.textContent == 'Light Mode'){
        mode.textContent = 'Dark Mode';
        localStorage.removeItem('mode');
    }

}

export default ToggleDark;