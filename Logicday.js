function majorityElement(numi) {
    // Inisialisasi Map untuk menghitung frekuensi munculnya setiap elemen
    let counts = new Map();
    
    // Lakukan iterasi melalui array dan hitung frekuensi setiap elemen
    numi.forEach(num => {
        // Jika elemen sudah ada dalam Map, tambahkan 1 ke nilai frekuensinya
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            // Jika elemen belum ada dalam Map, inisialisasi frekuensinya dengan 1
            counts.set(num, 1);
        }
    });
    
    // Cari elemen dengan frekuensi tertinggi
    let majorityElement;
    let maxCount = 0;

    counts.forEach((count, num) => {
        if (count > maxCount) {
            majorityElement = num;
            maxCount = count;
        } else if (count === maxCount) {
            // Jika ada dua elemen dengan frekuensi yang sama, lemparkan error
            throw new Error("Ada dua atau lebih elemen yang menjadi mayoritas.");
        }
    });
    
    // Kembalikan mayoritas elemen
    return majorityElement;
}

// Contoh penggunaan
try {
    console.log(majorityElement([3, 2, 3,2]));  
    console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
} catch (error) {
    console.error(error.message);
}
