import { mode, p } from '../Calculator/Calculator';

// Toggle Dark Mode
const ToggleDark = () => {
    document.body.classList.toggle('dark');
    mode.classList.toggle('white-btn');
    p.classList.toggle('white-text');
    
    if(mode.textContent == 'Dark Mode'){
        mode.textContent = 'Light Mode';
        localStorage.setItem('mode', 'dark');
    } else if(mode.textContent == 'Light Mode'){
        mode.textContent = 'Dark Mode';
        localStorage.removeItem('mode');
    }

}

export default ToggleDark;