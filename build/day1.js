"use strict";
function getSubstring(inputString, startIndex, endIndex) {
    if (startIndex < 0 || endIndex > inputString.length || startIndex >= endIndex) {
        throw new Error("Parameter input tidak valid");
    }
    return inputString.substring(startIndex, endIndex);
}
// Uji fungsi
const inputString = "asasadadasdasdasdasdasda";
const startIndex = 9;
const endIndex = 18;
const result = getSubstring(inputString, startIndex, endIndex);
console.log(result); // Output: "Typescript"
let nama;
nama = 'nadira';
console.log(nama);
let umur;
umur = '12';
console.log(umur);
let lengkap;
lengkap = true;
console.log(lengkap);
let biodataku;
biodataku = {
    nama: "nadira",
    umur: 20,
    lengkap: true,
};
console.log({ biodataku });
let dataDiri;
dataDiri = ['nadira', 20, false];
console.log(dataDiri);
// let rumah : null
// console.log(nama);
//tuple
//array
//null
//undefinde
//void
//
//
//
//
