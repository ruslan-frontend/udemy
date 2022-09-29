"use strict";
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

//! 19 - Callback функция

/* 
function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();
*/

/* 
function learnJS(lang, callback) {
  console.log(`I'm learning ${lang}`);
  callback();
}

function done() {
  console.log(`I'm Done!`);
}

learnJS('JavaScript', done);
 */

//! 20 - Объекты и деструктуризация
/* 
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('Test');
  }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
 */

// console.log(Object.keys(options).length); // Длинна массива

/* console.log(options.name);

delete options.name; //Удаление ключа

console.log(options); */

/* 
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
 */

/* 
let counter = 0
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}
console.log(counter);
 */

//! 21 - Массивы и псевдомассивы
/* 
const arr = [11, 22, 3, 49, 16, 84];
arr.sort(compareNum); // Сортировка массива чисел по порядку
function compareNum(a, b) {
  return a - b;
}
console.log(arr);
 */
/* 
arr.pop(); //Удаляет последний элемент массива
arr.push(10); // Добавляет элемент в конец массива

console.log('______________________');

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('______________________');

for (let value of arr) {
  console.log(value);
}
console.log('______________________');

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
console.log('______________________');
 */

/* 
const str = prompt('', '');
const products = str.split(', '); // Разделить на массив
products.sort(); // Сортировка массива по алфавиту (только для строк)
 */

/* console.log(products.join(';')); */ // Перевести массив в строчку

//! 22 - Передача по ссылке или по значению, Spread оператор
/* 
let a = 5,
    b = a;

b = b + 5;
console.log(a);
console.log(b);
 */

/* 
const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);
 */

//? Поверхностная копия объекта
/* function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10; // Заменит в одном объекте
newNumbers.c.x = 10; // Заменит в обоих объектах

console.log(numbers);
console.log(newNumbers);

const add = {
  d: 17,
  e: 20
};

const clone = (Object.assign({}, add));
clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Создание копии массива

newArray[1] = 'asd';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'faceboook'];

      console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 4, 7];
log(...num);

const array = ['a', 'b'];

const newAarray = [...array];
const q = {
  one: 1,
  two: 2
};

const newObj = {...q};
console.log(newObj);
 */

//! 23 - Основы ООП
/* 
let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello!');
  }
};

const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

console.log(jonh.armor);
jonh.sayHello();
 */

//! 25 - консоль разработчика, breakpoints / sources
//! 26 - динамическая типизация в JS

//? To string
/* 
console.log(typeof(String(null)));
console.log(typeof(String(12)));

console.log(typeof(5 + '')); // Конкатенация

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

//? To Number

console.log(typeof(Number('4')));
console.log(typeof(+'4'));

console.log(typeof(parseInt('15px', 10)));
 */
//? To Boolean

/* 
0, '', null, undefined, NaN; // False
 */
/* 
let switcher = null;
if (switcher) {
  console.log('Working..');
}

switcher = 1;
if (switcher) {
  console.log('Working..');
}


console.log(typeof(Boolean('4'))); // Boolean


console.log(typeof(!!'4')); // Boolean
 */

//! 27 - Задачи с собеседований

//? Какое будет выведено значение: let x = 5; alert( x++ ); ?
/* 
let x = 5;
console.log(x++); // 5
 */

//? Чему равно такое выражение: [ ] + false - null + true ?
/* 
console.log([] + false); // false
console.log([] + false - null); // NaN
 */

//? Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
/* 
let y = 1;
let x = y = 2;
console.log(x); // 2
 */

//? Чему равна сумма [ ] + 1 + 2?
/* 
console.log([] + 1 + 2); // 12
 */

//? Что выведет этот код: alert( "1"[0] )?
/* 
alert( "1"[0]); // 1
 */

//? Чему равно 2 && 1 && null && 0 && undefined ?
/* 
console.log(2 && 1 && null && 0 && undefined); // null
 */

//? Есть ли разница между выражениями? !!( a && b ) и (a && b)?
/* 
console.log(!!( 1 && 2 ) === (1 && 2)); // boolean !== 2

 */

//? Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
/*               3    3    3
console.log(null || 2 && 3 || 4);
И запинается на лжи &&
ИЛИ запинается на правде ||
 */

//? a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
/* 
let a,
    b;
a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b);
 */

//? Что выведет этот код: alert( +"Infinity" ); ?
/* 
console.log(+"Infinity"); // Infinity (только в этом случае, число)
 */

//? Верно ли сравнение: "Ёжик" > "яблоко"?
/* 
console.log("Ёжик" > "яблоко"); // false
Нужно смотреть ЮНИКОД, порядок символов
 */

//? Чему равно 0 || "" || 2 || undefined || true || falsе ?
/* 
console.log(0 || "" || 2 || undefined || true || falsе); // 2
0 = false
 */

//! 28 - Получение элементов со страницы
/* 
const box = document.getElementById('box'); // Получение по ID
const btns = document.getElementsByTagName('button'); // Получение по ТЭГУ
const circles = document.getElementsByClassName('circle'); // Получение по КЛАССУ

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart'); // Первый элемент на странице
 */

//! 29 - Действия с элементами на странице
/* 
const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"), 
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll(".heart"),
      oneHeart = wrapper.querySelector(".heart");

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: orange; width: 500px'; // Через CSS

btns[1].style.borderRadius = '100%';

circles[2].style.backgroundColor = 'yellow';
 */
/* 
for(let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'blue';
}
 */
/* 
hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});
 */

// const div = document.createElement('div');
// const text = document.createTextNode('Hello World');

// div.classList.add('black');
/* 
wrapper.prepend(div); // До
hearts[0].before(div);
hearts[0].after(div);
circles[0].remove(); // Удаление
hearts[0].replaceWith(circles[0]); // Замена
wrapper.append(div); // После
*/

//? Устаревшие конструкции
/* 
wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[2]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circles[0], hearts);
 */

//? Работа с текстом
/* 
div.textContent = 'Hello';
div.innerHTML = '<h1>Hello World</h1>';
div.insertAdjacentHTML('beforebegin', '<h2>Hi</h2>'); // Перед элементом
div.insertAdjacentHTML('afterbegin', '<h2>Hi</h2>'); // После элемента
div.insertAdjacentHTML('beforeend', '<h2>Hi</h2>'); 
div.insertAdjacentHTML('afterend', '<h2>Hi</h2>'); 
*/


//! 31 - События и их обработчики

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');


let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  i++;
  if (i == 1) {
    btn2.removeEventListener('click', deleteElement);
  }
};


btn1.addEventListener('click', () => {
  alert('Click');
});

btn2.addEventListener('click', deleteElement);


  
btn3.addEventListener('mouseenter', () => {
  console.log('hover');
});
  

//! 32 - Навигация по DOM




//! 31 - События и их обработчики
//! 31 - События и их обработчики
//! 31 - События и их обработчики
