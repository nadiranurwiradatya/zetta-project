


function getSubstring(inputString: string, startIndex: number, endIndex: number): string {
    if (startIndex < 0 || endIndex > inputString.length || startIndex >= endIndex) {
        throw new Error("Parameter input tidak valid");
    }
    
    return inputString.substring(startIndex, endIndex);
}

// Uji fungsi
const inputString : string = "asasadadasdasdasdasdasda";
const startIndex = 9;
const endIndex = 18;
const result = getSubstring(inputString, startIndex, endIndex);
console.log(result); // Output: "Typescript"



let nama : string 
nama = 'nadira';

console.log(nama);

let umur : ( number | string )
umur = '12' ;

console.log(umur);

let lengkap : boolean;
lengkap = true ;
console.log(lengkap);

type biodata = {
    nama : string , 
    umur : number , 
    lengkap : boolean,
}

let biodataku : biodata ;

biodataku = {
    nama : "nadira",
    umur : 20,
    lengkap : true ,

}
console.log({biodataku});


let dataDiri : [string,number,boolean]
dataDiri = ['nadira',20,false]

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
