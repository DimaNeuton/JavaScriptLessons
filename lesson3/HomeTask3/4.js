"use strict";

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере,
    ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,
    функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

const a = 37;
const b = 115;
function sum(a, b) {
    return a + b;
}
function dif(a, b) {
    return (a > b) ? a - b : b - a;
}
function multy(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
console.log(
`Для чисел ${a} и ${b}:\n
Сложение - ${sum(a, b)}\n
Вычитание - ${dif(a, b)}\n
Умножение - ${multy(a, b)}\n
Деление - ${div(a, b)}`);