/**
 * Cek apakah ada angka yang duplikat dalam array.
 *
 * @param {number[]} nums - Array input berisi bilangan bulat.
 * @return {boolean} Mengembalikan nilai true jika array memiliki angka yang duplikat, false jika tidak.
 */
function containDuplicate(nums) {
    // Buat Set untuk menyimpan elemen-elemen unik yang sudah ditemui
    let sudahDitemui = new Set();
    
    // Lakukan iterasi melalui array
    for (let num of nums) {
        // Jika elemen sudah ada di dalam Set, itu berarti duplikat
        if (sudahDitemui.has(num)) {
            return true;
        } else {
            // Jika tidak, tambahkan ke dalam Set
            sudahDitemui.add(num);
        }
    }
    
    // Tidak ditemukan duplikat
    return false;
}

// Contoh penggunaan
console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
