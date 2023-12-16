"use strict"; // включение режимы обязательного "определения"

// Задание 1: 
 
// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна 
// вывести в консоль строку: 
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
// 3. Создайте функцию, которая принимает число. 
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.
 
// Тайминг: 20 минут.

// const name = "Иван";
// const surname = "Джонсон";
// const age = 25;
// function hello(name, surname, age) {
//     console.log(`Привет ${name} ${surname}. Вы уже большой, вам ${age}`);    
// }
// hello(name, surname, age);

// function quadro(number) {
//     return number**2;
// }
// console.log(quadro(+prompt("Введите число")));

// function checkNumber(number) {
//     if (!Number.isFinite(number)) { return; }
//     if (number > 0) {
//         console.log("+++");
//     } if (number < 0) {
//         console.log("---");
//     }
// }
// checkNumber(5)


// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу 
// данной функции.
// 3. Дан код:
 
// ```
// func(2);
// func(3);
// func();
 
// function func(num = 5) {
//   console.log(num * num);
// }
// ```
 
// Расскажите, каким будет результат каждого из вызовов функции.
 
// Тайминг: 20 минут.

// const a = 4;
// const b = 7;
// const c = 9;
// function sum (a, b, c) {
//     console.log(a + b + c);
// }
// sum(a, b, c);


// Задание 3: 
 
// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 
// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.
 
// Тайминг: 20 минут. 

// function sqrt(number) {
//     return Math.sqrt(number);
// }
// console.log(sqrt(3) + sqrt(4));

// function min (number1, number2) {
//     return (number1 < number2) ? number1 : number2;
// }
// console.log(min(6, 4));

// Задание 4:
 
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает 
// день недели на русском языке.
// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в 
// зависимости от времени суток (утро, день, вечер, ночь), например: 
// "Добрый день, Иван." или "Доброй ночи, Иван.".
 
// Тайминг: 30 минут.

// function weekDay(number) {
//     switch (number) {
//         case 1: return "Понедельник";
//         case 2: return "Вторник";
//         case 3: return "Среда";
//         default : return "Такого дня недели нет"
//     }
// }
// console.log(weekDay(10));

// function Hello(name) {
//     const currentDate = new Date();
//     const currentHour = currentDate.getHours();
//     switch (true) {
//         case currentHour < 6 : return `Доброй ночи, ${name}.`;
//         case currentHour < 12 : return `Доброе утро, ${name}.`;
//         case currentHour < 18 : return `Добрый день, ${name}.`;
//         case currentHour < 24 : return `Добрый вечер, ${name}.`;
//     }
// }
// console.log(Hello("Иван"));


// Реализовать функцию round5, которой передается целое число, функция должна 
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
// на 5.
 
// function round5(val) {
//     if (val > 0) {
//         if (val % 5 > 2) {
//             return Math.ceil(val / 5) * 5;
//         } return Math.floor(val / 5) * 5;
//     } else {
//         if (val % 5 < -2) {
//             return Math.floor(val / 5) * 5;
//         } return Math.ceil(val / 5) * 5;
//     }
    
// }
// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(3)); // 5
// console.log(round5(11)); // 10
// console.log(round5(14)); // 15
// console.log(round5(50)); // 50
// console.log(round5(-2)); // 0
// console.log(round5(-3)); // -5

// function pow(x, n) {
//     if (n === 1) return x;
//     return pow(x, n - 1) * x;
// }
// console.log(pow(5, 4));


// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо 
// чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, 
// кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна 
// выводить слово «FizzBuzz»

// function fizz() {
//     // if (n === 100) console.log(100);
//     for (let i = 1; i < 101; i++) {
//         if (i % 15 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else {
//             console.log(i);
//         }
//     } 
// }
// fizz();
