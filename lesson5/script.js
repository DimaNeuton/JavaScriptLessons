"use strict"; // включение режимы обязательного "определения"

// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.

// Тайминг: 20 минут.

// const week = {
//   1: "Понедельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
//   6: "Суббота",
//   7: "Воскресенье",
// };
// console.log(week[2]);

// const user = {
//     name: 'Jhon',
//     surname: 'Smit',
//     age: 25,
// }
// console.log(`${user.name} ${user['surname']} ${user.age}`);

// const user = {
//   name: "Jhon",
//   surname: "Smit",
//   patronymic: prompt("Введите отчество"),
//   age: 25,
// };
// console.log(user);
// delete user.surname;
// console.log(user);

// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// Тайминг: 25 минут.

// const weekArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const indexArr = [1, 2, 3, 4, 5, 6, 7];
// const week = {};
// for (let i = 0; i < weekArr.length; i++) {
//     week[weekArr[i]] = indexArr[i];
// }
// console.log(week);

// const obj = {x: 1, y: 2, z: 3};
// for (const key in obj) {
//     obj[key] **= 2;
// }
// console.log(obj);

// Задание 3:

// ```
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }
// ```

// Найдите сумму всех чисел, приведенного объекта.

// Тайминг: 20 минут.

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };
// let sum = 0;
// for (const key in obj) {
//   sum += Object.values(obj[key]).reduce((a, b) => a + b);
// }
// console.log(sum);

// Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

// Тайминг: 25 минут.

// const riddle = {
//   question: "Зимой и летом одним цветом",
//   answer: "елка",
//   askQquestion() {
//     if (prompt(this.question) !== this.answer) {
//       if (prompt("Подсказка 1: Она зеленая") !== this.answer) {
//         if (prompt("Подсказка 2: Это дерево") !== this.answer) {
//           console.log("Ты тупой");
//         } else {
//           console.log("Поздравляем");
//         }
//       } else {
//         console.log("Поздравляем");
//       }
//     } else {
//       console.log("Поздравляем");
//     }
//   },
// };
// riddle.askQquestion();

const riddle = {
    question: "Зимой и летом одним цветом",
    answer: "елка",
    hints: ["Подсказка 1: Она зеленая", "Подсказка 2: Это дерево"],
    askQquestion() {
        const texts = [this.question, ...this.hints];
        let i = 0;
        let userAnswer = null;
        do {
            userAnswer = prompt(texts[i]);
            if (userAnswer === this.answer) {
                alert('Верно');
                return;
            }
            i++;
        } while (userAnswer !== this.answer && i < texts.length)
        alert('Неверно');
    },
  };
  riddle.askQquestion();