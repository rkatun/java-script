let a = +prompt('Введіть значення "а"');
let b = +prompt('Введіть значення "b"');
let c = +prompt('Введіть значення "c"');

let result = (a + b + c) / 3;
if (a === b || a === c || b === c) {
  alert("Помилка!!! Введіть різні значення)");
} else {
  document.write(`Середнє арифметичне вказаних значень: ${result}`);
}
