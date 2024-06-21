"use strict";
// // 1st function
// function combineElements(arr: (number | string)[]): string {
//     return arr.join(' ');
// }
// // 2nd function
// function allItemsOfType(arr: any[], type: 'number' | 'string'): boolean {
//     return arr.every(item => typeof item === type);
// }
// function processArray(arr: (number | string)[]): number | string {
//     if (allItemsOfType(arr, 'number')) {
//         return arr.reduce((acc: number, curr: number | string) => acc + (typeof curr === 'number' ? curr : Number(curr)), 0);
//     } else if (allItemsOfType(arr, 'string')) {
//         return arr.join(' ');
//     } else {
//         return 'invalid input';
//     }
// }
// // Custom types
// type Product = {
//     name: string;
//     vendor: string;
//     quantity: number;
//     inStock: number;
//     price: number;
// };
// type SimplifiedProduct = {
//     name: string;
//     buyable: boolean;
//     totalPrice?: number;
// };
// // 3rd function
// function transformProduct(product: Product): SimplifiedProduct {
//     const buyable = product.inStock > 0;
//     const totalPrice = product.quantity * product.price;
//     const simplifiedProduct: SimplifiedProduct = {
//         name: product.name,
//         buyable: buyable,
//     };
//     if (buyable) {
//         simplifiedProduct.totalPrice = totalPrice;
//     }
//     return simplifiedProduct;
// }
// // Test cases
// console.log(combineElements([1, 'data', '3', 'result'])); // Output: '1 data 3 result'
// console.log(combineElements(['Bejo', 'has', '4', 'sport', 'car'])); // Output: 'Bejo has 4 sport car'
// console.log(processArray([1, 2, 3, 4])); // Output: 10
// console.log(processArray(['the', 'dolphins', 'of', 'zettacamp'])); // Output: 'the dolphins of zettacamp'
// console.log(processArray(['Bejo', 'has', 4, 'sport', 'car'])); // Output: 'invalid input'
// const product1: Product = {
//     name: 'Coca Cola',
//     vendor: 'Coca Cola Company',
//     quantity: 5,
//     inStock: 100,
//     price: 5000,
// };
// console.log(transformProduct(product1)); // Output: { name: 'Coca Cola', buyable: true, totalPrice: 25000 }
// const product2: Product = {
//     name: 'Sari Roti',
//     vendor: 'Toko Kue Sebelah',
//     quantity: 2,
//     inStock: 0,
//     price: 10000,
// };
// console.log(transformProduct(product2)); // Output: { name: 'Sari Roti', buyable: false }
