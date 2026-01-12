// primitive data type / value
let name = "juana"; // string literal
let age = 19; // number literal
let isAlice = true; //boolean
let province = undefined; // undefined adalah tipe data sekaligus value
let selectedColors = null; // 

// reference type
// object
let person = {
    name : "Wayan",
    age : 19
};

console.log(person.name);
person.name = "satya"; // dot notation untuk mengganti value properti objek

person['name'] = "Halow" // bracket notation untuk mengganti value properti objek
// array
let favColors = ['red', 'blue']
console.log(favColors[1]);


// function