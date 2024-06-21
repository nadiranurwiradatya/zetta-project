"use strict";
function combineElements(arr) {
    return arr.join(' ');
}
// Case 1
const case1 = [1, 'data', '3', 'result'];
console.log(combineElements(case1)); // Output: '1 data 3 result'
// Case 2
const case2 = ['Bejo', 'has', '4', 'sport', 'car'];
console.log(combineElements(case2)); // Output: 'Bejo has 4 sport car'
function sumOrConcatenate(arr) {
    let isAllNumbers = true;
    let isAllStrings = true;
    arr.forEach(item => {
        if (typeof item !== 'number') { //typeof digunakan untuk mengembalikan tipe data
            isAllNumbers = false;
        }
        if (typeof item !== 'string') {
            isAllStrings = false;
        }
    });
    if (isAllNumbers) { //fungsi penggunaan all number dan all string
        let sum = 0;
        arr.forEach(item => {
            if (typeof item === 'number') {
                sum += item;
            }
        });
        return sum;
    }
    else if (isAllStrings) {
        return arr.join(' ');
    }
    else {
        return 'invalid input';
    }
}
// Contoh penggunaan
const case3 = [1, 2, 3, 4];
console.log(sumOrConcatenate(case3)); // Output: 10
const case4 = ['the', 'dolphins', 'of', 'zettacamp'];
console.log(sumOrConcatenate(case4)); // Output: 'the dolphins of zettacamp'
const case5 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(sumOrConcatenate(case5)); // Output: 'invalid input'
;
;
// Fungsi untuk mengubah produk menjadi produk sederhana
function transformasiProduk(produk) {
    const { Nama, Jumlah, Tersedia, Harga } = produk;
    const dapatDibeli = Jumlah <= Tersedia; // Produk dapat dibeli jika jumlah kurang dari atau sama dengan yang tersedia
    let totalHarga; // Inisialisasi total harga sebagai undefined
    // Hitung total harga jika produk dapat dibeli
    if (dapatDibeli) {
        totalHarga = Jumlah * Harga;
        return {
            Nama,
            DapatDibeli: dapatDibeli,
            TotalHarga: totalHarga,
        };
    }
    else {
        return {
            Nama,
            DapatDibeli: dapatDibeli,
        };
    }
    // Kembalikan produk sederhana
}
// Contoh penggunaan
const produk1 = {
    Nama: 'Coca-Cola',
    Vendor: 'Perusahaan Coca Cola',
    Jumlah: 5,
    Tersedia: 0,
    Harga: 5000,
};
const produk2 = {
    Nama: 'Sari Roti',
    Vendor: 'Toko Kue Sebelah',
    Jumlah: 2,
    Tersedia: 3,
    Harga: 10000,
};
// Transformasi produk menjadi produk sederhana
const produkSederhana1 = transformasiProduk(produk1);
const produkSederhana2 = transformasiProduk(produk2);
console.log("Kasus 1:");
console.log("Parameter:");
console.log(produk1);
console.log("Return :");
console.log(produkSederhana1);
console.log("\nKasus 2:");
console.log("Parameter:");
console.log(produk2);
console.log("Return :");
console.log(produkSederhana2);
