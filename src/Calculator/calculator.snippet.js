let numberDOM = document.createElement('p');
let numberValue = document.createTextNode(number);
numberDOM.appendChild(numberValue);
display.appendChild(numberDOM);


// calculate All Code
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