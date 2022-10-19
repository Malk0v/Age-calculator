// function age() {
// var d1 = document.getElementById("date").value;
// var m1 = document.getElementById("month").value;
// var y1 = document.getElementById("year").value;
// var date = new Date();
// var d2 = date.getDate();
// var m2 = 1 + date.getMount();
// var y2 = date.getFullYear();
// var mouth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31];
// if (d1 > d2) {
//     d2 = d2 + mouth[m2 - 1];
//     m2 = m2 - 1; 
// } if (m1 > m2) {
//     m2 = m2 + 12;
//     y2 = y2 - y1;
// }

//     var d = d2 - d1;
//     var m = m2 - m1;
//     var y = y2 - y1;

//     document.getElementById("age").innerHTML =
//         'Your Age is ' + y + 'Years ' + m + 'Months' + d + ' Days';
// }


//-------------------------------
// let age = 25;
// age = 22;
// console.log(typeof age);

// console.log(5 === 5);
// console.log('5' === 5);
// console.log(5 == 5);
// console.log(5 !== 5);

// const qwe = 1
// console.log(Number(qwe));

// console.log(Math.random() * (12 - 1) + 1);

// console.log(Math.round((Math.random()* (12 - 1) + 1)));

// const message = 'Mango is happy';
// console.log(message.toUpperCase());

// const age = 20;
// console.log(age > 10 && age < 30); 

// const login = 'Ant.0.nio';
// const password = 'password';

// if (login === 'Ant.0.nio' && password === 'password') {
//     console.log('Добро пожаловать')
// } else {
//     console.log('пользователь не найден')
// }

const enter = login === 'Antonio' && password === 'password' ? 'Добро пожаловать' : 'пользователь не найден'
console.log(enter)

const age = new Date 
const time = 1
console.log(age)
console.log(new Date)

const a = age - -1

const b = a - age

console.log(b)

console.log(age.getFullYear())

const name = "Mango";
console.log(name.split("")); 

const message = "JavaScript это интересно";
console.log(message.split(" "));


console.log(name.split(""))

console.log(message.split(" ")); 

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst);  

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); 

console.log(oldClients); 
console.log(newClients); 

var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMount();
var y2 = date.getFullYear();
var mouth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31];
if (d1 > d2) {
    d2 = d2 + mouth[m2 - 1];
    m2 = m2 - 1; 
} if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - y1;
}

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.helloWord = 'hello';


console.log(book);
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']


//---------------

// const user = {
//   name: name 'Maksim',
//   lastName 'Antonov'
//   age = "27"
//   tag: "MKSM",
//   location: {
//     country: "Ukraine",
//     city: "Izym"
//   },
//   hashTag: ["swiming", "music", "game"],
// };

// console.log(user);


//------------------

// // распыление spread
// const temps = [114, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); 


// // создание нового массива методом spread
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]


// обьединение двух обьектов в один  методом spread
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, 


//------ 

//Деструктуризация массивов
// const rgb = [20110, 2255, 103330];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(rgb); // "R:200,G:255,B:100"

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }