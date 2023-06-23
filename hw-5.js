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
    const i = c * 2;
    return i;
}
result (5);

// 4

const age=prompt('Сколько вам лет?');
if (age<0) {
    console.log('Вы ввели неправильное значение');
} else if (age<=12) {
    console.log('Привет, Друг!');
} else {
    console.log('Добро пожаловать!');
}

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

// 8

function showTextButton() {
    let userAnswer = prompt('Введите номер месяца');

    if (userAnswer === 12 || 1 || 2) {
        alert('Зима');
    } else if (userAnswer === 3 || 4 || 5) {
        alert('Весна');
    } else if (userAnswer === 6 || 7 || 9) {
        alert('Лето');  
    } else if (userAnswer === 9 || 10 || 11) {
        alert('Осень'); 
    } else {
        alert('Такого месяца не существует');
    }
}
