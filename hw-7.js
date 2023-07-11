// // 1
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

// // 2
// const animal = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';
// animal.forEach((animal) => {
//     if (animal.toLowerCase().startsWith(search.toLowerCase())) {
//         console.log(animal);
//     }
// })

// const product = ['яблоко', 'груша', 'гриб', 'огурец'];
// const search1 = 'гру';
// product.forEach((product) => {
//     if (product.toLowerCase().startsWith(search1.toLowerCase())) {
//         console.log(product);
//     }
// })
function searchStart(array, string) {
 return array.includes(string);
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// const building = ['Дом', 'Банк', 'Больница', 'Театр'];
// const search2 = 'Кино';
// building.forEach((building) => {
//     if (building.toLowerCase().includes(search2.toLowerCase())) {
//         console.log(building);
//     }
// })

 
// // 3

// function getRandom1(Value) {
//     return Math.floor(Value);
// }
// console.log(getRandom1(32.58884));

// function getRandom2(Value) {
//     return Math.ceil(Value);
// }
// console.log(getRandom2(32.58884));

// function getRandom3(Value) {
//     return Math.round(Value);
// }
// console.log(getRandom3(32.58884));

// // 4

// function getMax(Value) {
//     return Math.max(Value);
// }
// console.log(getMax(52, 53, 49, 77, 21, 32));

// // 5
// function randomNum(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(randomNum(1,10));

// // 6
// function getRandomArrNumbers(length = Math.floor(number/2)) {
//     return Array.from(Array(length),() => Math.floor(Math.random()*number)+1);
// }

// // 7
// const random = (a, b) => {
//     return Math.floor(Math.random() * (a - b + 1)) + b;
// }
// console.log(random(4, 23));

// // 8
// let currentDateNow = new Date();
// console.log(currentDateNow); 

// let myDate = new Date("07/03/2023");
// console.log(myDate);

// // 9
// let currentDate = new Date("07/03/2023");
// console.log(currentDate);

// currentDate.setDate(73);
// console.log(currentDate);

// // 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let date = new Date();
// let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это день недели " + days[date.getDay()];
// console.log(fullDate);

// let fullTime = "Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// console.log(fullTime);

 11
const game_button = document.getElementById("game_button");
const fruct = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
game_button.addEventListener("click", game);

function massiv(array) {
    return array.sort(() => Math.random() - 0.5);
}

function game() {
    const word = massiv([...fruct]);
    alert(`Перемешанный массив: ${fruct.join(', ')}`);

    const a = prompt("Чему равнялся первый элемент массива?");
    const b = prompt("Чему равнялся последний элемент массива?");

    let answer=1;
    a === word[0];
    b === word[word.length - 1], answer++;

   switch (answer) {
    case 2:
        alert("Поздравляю, вы угадали оба элемента!");
        break;
    case 1: 
        alert("Вы были близки к победе!");
        break;
    default:
        alert("Вы ответили неверно");
   }
}   //нужна помощь, не могу разобраться с этой задачей.