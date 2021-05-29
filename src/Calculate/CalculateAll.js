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

const calculateAll = (numbers) => {

    let str = numbers.toString(); // <- jadikan string
    let removeComa = str.split(","); // <- jadikan array
    let merge = removeComa.reduce((acc, val) => acc + val ) // <- gabungkan

    if(merge.includes("+")){
        let separate = merge.split('+');
        let convertInteger = separate.map(val => parseInt(val));
        let hitung = convertInteger.reduce((acc, val) => acc + val);
        return hitung;
    }

    // for(let i = 0; i < str.length; i++){
    //     if(str[i] == '+'){
    //         angkas.push(parseInt(str.slice(0, i)));
    //     } 
    // }

    // log(angkas);
}

export default calculateAll;