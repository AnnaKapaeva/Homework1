// 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// 2
const animal = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
animal.forEach((animal) => {
    if (animal.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(animal);
    }
})

const product = ['яблоко', 'груша', 'гриб', 'огурец'];
const search1 = 'гру';
product.forEach((product) => {
    if (product.toLowerCase().startsWith(search1.toLowerCase())) {
        console.log(product);
    }
})

const building = ['Дом', 'Банк', 'Больница', 'Театр'];
const search2 = 'Кино';
building.forEach((building) => {
    if (building.toLowerCase().includes(search2.toLowerCase())) {
        console.log(building);
    }
})

// 3

function getRandom1(Value) {
    return Math.floor(Value);
}
console.log(getRandom1(32.58884));

function getRandom2(Value) {
    return Math.ceil(Value);
}
console.log(getRandom2(32.58884));

function getRandom3(Value) {
    return Math.round(Value);
}
console.log(getRandom3(32.58884));

// 4

function getMax(Value) {
    return Math.max(Value);
}
console.log(getMax(52, 53, 49, 77, 21, 32));

// 5
function randomNum(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(randomNum(1,10));

// 6
function getRandomArrNumbers(length = Math.floor(number/2)) {
    return Array.from(Array(length),() => Math.floor(Math.random()*number)+1);
}

// 7

// 8
let currentDateNow = new Date();
console.log(currentDateNow); 

let myDate = new Date("07/02/2023");
console.log(myDate);

// 9
let currentDate = new Date("07/03/2023");
console.log(currentDate);

currentDate.setDate(73);
console.log(currentDate);



