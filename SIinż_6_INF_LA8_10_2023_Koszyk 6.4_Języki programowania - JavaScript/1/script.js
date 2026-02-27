let firstName = "Janusz";
var lastName = "Nowak";
const age = 20;

console.log(firstName);
document.writeln("test");
// alert("warning");

// konkatenacja
document.writeln("<br>Imię i nazwisko: " + firstName + " " + lastName);

// template string
document.writeln(`<br>Imię i nazwisko: ${firstName} ${lastName}`);


let text = `pierwsza linia
druga linia
    trzecia linia`;
console.log(text);

let student = true;
console.log(`Czy jest studentem? ${student ? "TAK" : "NIE"}`);

let a = 10;
let b = "8";
console.log(a + b);
console.log(a - b);

let i = "10", j = 5, k = true, l = false;

console.log(i + j); // 105
console.log(j + i); // 510
console.log(j + k); // 6
console.log(j + l); // 5

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log("10" - 4); // 6
console.log("10" * 4); // 40
console.log("10" / 4); // 2.5
console.log("10d" / 4); // NaN

console.log(10 + 20 + "30"); // 3030
console.log(10 + "30" + 20); // 103020
console.log("30" + 10 + 20); // 301020

// konwersja jawna
let c = "10.5";
let d = "5";

console.log(c + d); // 10.55
console.log(Number(c) + Number(d)); // 15.5
console.log(parseInt(c) + d); // 105
console.log(parseInt(c) + Number(d)); // 15
console.log(parseFloat(c) + parseFloat(d)); // 15.5

// konwersja liczby na tekst
let n = 123;
let t = String(n);
console.log(t);
console.log(typeof t); // string