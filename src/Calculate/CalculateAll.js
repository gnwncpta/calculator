import { log } from '../Fazt/Fazt';



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
        let convertInteger = separate.map(val => parseFloat(val));
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