let firstName = "Janusz";
let lastName = "Nowak";

document.writeln(firstName);
console.log(lastName);
// alert("Merito");

// konkatenacja
document.writeln("<br>Imię i nazwisko: " + firstName + " " + lastName);

document.body.append("<br>Imię i nazwisko: " + firstName + " " + lastName);
document.body.append(document.createElement("br"), "Imię i nazwisko: " + firstName + " " + lastName);

// template string
document.writeln(`<br>Imię i nazwisko: ${firstName} ${lastName}`);

let student = true;
console.log(`Czy jest studentem? ${student ? "TAK" : "NIE"}`);

let a = 10;
let b = "8";
console.log(a + b); // 108
console.log(a - b); // 2

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

console.log(typeof(j)); // number
let t = String(j);
console.log(typeof(t)); // string


