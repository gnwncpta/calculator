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


// =>  Calculator.js file

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
});


// => Count.js
let hasil = 7 + 7 - 7;

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
    let result = `${theNum[i]}`;
}