//--------------------Случайная строка. Использовать в решении цикл for или while----------------//
let randIndex = "";
let randChar = "";
for (let i = 0; i < 26; i++) {
  randIndex = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  randChar += String.fromCharCode(randIndex);
}
console.log(randChar);
