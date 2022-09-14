"use strict"
//! 13 - Условия

/* 
if (1) {
  console.log('Ok!');
} else {
  console.log('Error!');
}

const num = 50;

if (num < 49) {
  console.log('Error!');
} else if (num > 100) {
  console.log('Много!');
} else {
  console.log('Ok!');
}
 */

//? Тернарный оператор
// (num === 50) ? console.log('Ok!') : console.log('Error!');


//? Switch (строгое сравнение)

/* 
switch (num) {
  case 49:
    console.log('Неверно!');
    break;
  case 100:
      console.log('Неверно!');
      break;
  case 50:
      console.log('Верно!');
      break;
  default:
      console.log('Попробуйте еще!');
      break;
    }
     */

//! 14 - Циклы
    // let num = 50;

/* 
    while (num <= 55) {
      console.log(num);
      num++;
    }
 */

/* 
    do {
      console.log(num);
      num++;
    }
    while (num < 55);
 */

/*     
    for (let i = 1; i < 8; i++) {
      if (i === 6) {
        // break;
        continue;
      }
      console.log(i);
    }
 */

//! 16 - Функции

//? Fuction Declaration
/* 
let num = 20;

function showFirstMessage(text) {
  console.log(text);
  num = 10;
}

showFirstMessage("Hello World");
console.log(num);
 */


/* 
function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
 */

/* 
function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);
 */

//? Function Expression
/* 
const logger = function() {
  console.log('Hello!');
};
logger();
 */

//? Стрелочные функции
/* 
const calc = (a, b) => {
  console.log('1');
  return a + b 
};
calc();
 */

//! Методы и свойства срок и чисел

/* 
const str = 'Строка';
const arr = [1, 2, 3];

console.log(str.length);
console.log(str.toUpperCase()); // Верхний регистр
console.log(str.toLowerCase()); // Нижний регистр
console.log('str', str);
 */

/* 
let fruit = 'Some Fruit';
console.log(fruit.indexOf('Fruit')); // 5
 */

/* 
const logg = 'Hello World';
console.log(logg.slice(6, 11)); // Вырезает строку от и до (можно отрицательные числа/начнется с конца строки)
console.log(logg.substring(6, 11)); // Вырезает строку от и до(нельзя отрицательные числа)
console.log(logg.substr(6, 3)); // Выререзает строки от, а дальше указывается кол-во символов, которые нужно вырезать
 */

/* 
const num = 12.3;
console.log(Math.round(num)); // 12 - Округление до целых чисел
 */

/* 
const test = '12.2px';
console.log(parseInt(test)); // 12 - Округление до целых чисел и преобразование
console.log(parseFloat(test)); // 12.2 - Округление до числа
 */

//! 
//! 
//! 