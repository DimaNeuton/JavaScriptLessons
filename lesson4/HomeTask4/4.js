"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let string = "";
for (let i = 1; i < 21; i++) {
  string += "x";
  console.log(`${i} ${string}`);    // добавил число перед каждой строкой для удобства проверки
}