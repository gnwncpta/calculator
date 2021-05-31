import { log } from '../Fazt/Fazt';

// const calculateAll = (arr) => {
//     let angka = [];
//     let operator = [];
//     let calc = ""; // berisi 

//     // memasukann angka dan operator ke array terpisah;
//     arr.forEach(isi => {
//         if(typeof isi === "number"){
//             angka.push(isi);
//         } else if(typeof isi === "string"){
//             operator.push(isi);
//         }
//     });

//     for(let i = 0; i < arr.length; i++){

//         if(typeof arr[i] === "number"){
//             calc += arr[i]
//         } else if(typeof arr[i] === "string"){
//             calc += arr[i]
//         }

//     };

//     // let removeComma = calc.join(' ');
//     // let arrange = removeComma.split(' ');
//     // log(arrange);
//     // log(calc.slice(0, 5));

//     for(let i = 0; i < calc.length; i++){
//         if(calc[i] === '+'){
//             log('Ada +');
//         }
//     }
// }

// Masih tidak efisien butuh kode/logic yang efisien
const calculateAll = (numbers) => {

    // jadikan string
    let str = numbers.toString();
    // hapus komanya (memakai split itu akan menjadikannya array)
    let removeComa = str.split(",");
    // gabungkan string menjadi satu
    let merge = removeComa.reduce((acc, val) => acc + val);
    log(merge);

    // jika variable merge mengandung string '+' maka
    if(merge.includes("+")){
        // pisahkan berdasarkan '+'
        let separate = merge.split('+');
        // convert dari `String` ke bentuk `Integer`
        let convertInteger = separate.map(val => parseInt(val));
        log(convertInteger)
        // kalkulasi semua
        let hitung = convertInteger.reduce((acc, val) => acc + val);
        return hitung;

    // jika gabungan string tidak mengandung `String` '+'
    } else if(!merge.includes('+')){
        return merge;
    }

}

export default calculateAll;