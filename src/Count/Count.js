import { log as print } from '../Fazt/Fazt';
import stringify from '../stringify/stringify';

// metode perhitungan KABATAKU = Kali, Bagi, Tambah, Kurang
// urutan perhitungan dimulai dari perkalian

// Masih tidak efisien butuh kode/logic yang efisien
const count = (numbers) => {
    let theNum = []; // 1, 4, 2 -> 14, 2
    let theOpt = []; // *

    let string = stringify(numbers); // 14 * 2

    // jika nilainya tidak ada operator maka return nilainya
    if(!string.includes('*') && !string.includes('/') && !string.includes('+') && !string.includes('-')){
        return string;
    } else {
        // jika string mengandung variabel '*'
        if(string.includes('*')){

            // pisah string berdasarkan string '*'
            let angka = string.split('*');

            // isi array theOpt dengan string '*'
            theOpt.push('*');

            // isi array theNum dengan angka hasil splitan
            angka.forEach(isi => theNum.push(parseFloat(isi)));

        // jika string mengandung variabel '*'
        }else if(string.includes('/')){
            let angka = string.split('/');
            theOpt.push('/');
            angka.forEach(isi => theOpt.push(parseFloat(isi)));
        }
    }

    // theNum = [7, 7, 2]
    // theOpt = ['+', '*']
    print(theNum)
    

    let hasil = 0; // 14 + 14

    for(let i = 0; i < theNum.length; i++){ // index: 0
        if(theOpt[i] == "*"){
            hasil += theNum[i] * theNum[i+1] || 0;
        } else if(theOpt[i] == "/") {
            hasil += theNum[i] / theNum[i+1] || 0;
        } else if(theOpt[i] == "+") {
            hasil += theNum[i] + theNum[i+1] || 0;
        } else if(theOpt[i] == "-") {
            hasil += theNum[i] - theNum[i+1] || 0;
        }
    }
    
    return hasil;
}

export default count;