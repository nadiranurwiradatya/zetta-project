"use strict";
//Number: Tipe data untuk angka, baik bilangan bulat maupun pecahan.
let myNumber = 5;
//String: Tipe data untuk teks.
let myString = "Hello, world!";
//Boolean: Tipe data untuk nilai true/false.
let isTrue = true;
//Array: Tipe data untuk kumpulan nilai yang serupa
let myArray = [1, 2, 3, 4, 5];
let ourArray = ['yayan', 'wahyu', 'dadang', 'engkos'];
//Tuple: Tipe data untuk kumpulan nilai dengan tipe tertentu dan jumlah elemen yang tetap.
let myTuple = ["apple", 5];
//Enum: Tipe data untuk kumpulan nilai konstan.
//Enum mengurangi penggunaan nilai keras (hardcoded) dalam kode. Sebagai gantinya, Anda dapat menggunakan nama-nama yang bermakna untuk merepresentasikan nilai-nilai tersebut
//Dengan menggunakan enum, Anda dapat memberikan semantik yang lebih jelas terhadap nilai-nilai tertentu, sehingga meningkatkan pemahaman terhadap kode yang Anda tulis
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
console.log(Color);
//Any: Tipe data yang bisa berubah menjadi tipe apa pun.
let myVariable = 5;
myVariable = "Now it's a string!";
//Void: Tipe data yang biasanya digunakan untuk fungsi yang tidak mengembalikan nilai.
function sayHello() {
    console.log("Hello!");
}
//Null dan Undefined: Tipe data yang mewakili nilai null atau undefined.
let myNull = null;
let myUndefined = undefined;
let objectSaya = { name: "John", age: 30 };
console.log(objectSaya);
//Union Types: Tipe data yang bisa memiliki lebih dari satu tipe.
let myUnion = "Hello";
myUnion = 'lima' + 5; // Valid
console.log(myUnion);
let myIntersection = { prop1: 5, prop2: "Hello" };
console.log(myIntersection);
// TypeScript membantu mengurangi kesalahan saat pengembangan karena sifatnya yang strongly typed. Ini memungkinkan Anda menangkap kesalahan di tahap pengembangan daripada di tahap runtime, yang secara keseluruhan dapat meningkatkan keamanan aplikasi Anda.
//
