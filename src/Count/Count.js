import { log as print } from '../Fazt/Fazt';

const stringify = (numbers) => {
    let str = numbers.toString();
    let removeComa = str.split(',');
    let merge = removeComa.reduce((acc, val) => acc + val)
    return merge;
}

const add = (numbers) => {
    // jadikan string
    let str = numbers.toString();
    // hapus komanya (memakai split itu akan menjadikannya array)
    let removeComa = str.split(",");
    // gabungkan string menjadi satu
    let merge = removeComa.reduce((acc, val) => acc + val);

    // jika variable merge mengandung string '+' maka
    if(merge.includes("+")){
        // pisahkan berdasarkan '+'
        let separate = merge.split('+');
        // convert dari `String` ke bentuk `Integer`
        let convertInteger = separate.map(val => parseFloat(val));
        // kalkulasi semua
        let hitung = convertInteger.reduce((acc, val) => acc + val);
        return hitung;

    // jika gabungan string tidak mengandung `String` '+'
    } else if(!merge.includes('+')){
        return merge;
    }
}

// metode perhitungan KABATAKU = Kali, Bagi, Tambah, Kurang
// urutan perhitungan dimulai dari perkalian

// Masih tidak efisien butuh kode/logic yang efisien
const count = (numbers) => {
    let theNum = [];
    let theOpt = [];

    let string = stringify(numbers);
    let angka = string.split('');
    angka.forEach(isi => {
        if(isi === "*" || isi === "/" || isi === "+" || isi === '-'){
            theOpt.push(isi);
        } else {
            theNum.push(parseInt(isi));
        }
    });

    for(let i = 0; i < theNum.length; i++){
        if(theOpt[i] == "*"){
            // then operator is *
        } else if(theOpt[i] == '/'){
            // then operator is /
        } else if(theOpt[i] == '+'){
            // then operator is +
        } else if(theOpt[i] == '-'){
            // then operator is -
        }
        let result = `${theNum[i]}`
    }

    return string;
}

export { add, count }