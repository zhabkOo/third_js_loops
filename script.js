//--------------------Случайная строка. Использовать в решении цикл for или while----------------//
let randIndex = "";
let randChar = "";
let randCharStr = "";
for (let i = 0; i < 26; i++) {
  randIndex = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  randChar = String.fromCharCode(randIndex);
  randCharStr += String.fromCharCode(randIndex);
  if (randChar === "E" || randChar === "w") {
    break;
  }
}
console.log(randIndex);
console.log(randChar);
console.log(randCharStr);
