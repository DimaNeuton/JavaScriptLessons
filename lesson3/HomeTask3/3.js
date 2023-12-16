"use strict";

/*
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

function max() {
    const num1 = prompt('Введите первое число');
    const num2 = prompt('Введите второе число');
    const num3 = prompt('Введите третье число');
    if (num1 > num2 & num1 > num3) console.log(`Максимально число ${num1}`);
    else if (num2 > num3) console.log(`Максимально число ${num2}`);
    else console.log(`Максимально число ${num1}`);
}
max();