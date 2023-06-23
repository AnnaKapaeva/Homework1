// 1

function min(a,b) {
    if (a<b) {
    return a;    
    } else {
    return b;  
    }
}
min(4,7);

// 2

function number() {
    let parity = prompt(question);
    if (prompt === n % 2 == 0) {
        alert('число четное');
    } else {
        alert('число нечетное');
    }
}

// 3

function result(с) {
    let result = c*c;
}

return result;


4

let age = prompt("Сколько вам лет?");
let printMessage;

if (age <= 0) {
    function printMessage() {
        alert("Вы ввели неправильное значение");
    }
if (age < 12) {
    function printMessage() {
        alert("Привет друг!");
    }
} else {
    function printMessage() {
        alert("Добро пожаловать!");
    }
}
printMessage();

// 5

function calculation(d,e) {
    if (isNaN(d) || isNaN(e)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(d*e);
    }
}

calculation(9,10);

6 не поняла как сделать

7

const circle1 = {
    radius: 10,
    getArea() {
        return circle1.radius;
    }
};
console.log(circle1.getArea());

const circle2 = {
    radius: 20,
    getPerimetr() {
        return circle2.radius;
    }
};
console.log(circle2.getPerimetr());
