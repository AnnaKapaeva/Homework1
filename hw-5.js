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

function parity(num) {
    let first = ('число четное');
    let second = ('число нечетное');
    if (num % 2 == 0) {
        return first;
    } else {
        return second;
    }
}

// 3

function result(с) {
    const i = c * 2;
    return i;
}


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

// 6 не поняла как сделать

// 7

function getRectangArea() {
    return this.radius * this.n * 2;
}
function getRectangPerimetr() {
    return this.radius * this.n * 2;
}

const circle1 = {
    radius: 4,
    n: 3.14,

    getArea: getRectangArea,
    getPerimetr: getRectangPerimetr,
};

const circle2 = {
    radius: 5,
    n: 3.14,

    getArea: getRectangArea,
    getPerimetr: getRectangPerimetr,
};

console.log(circle1.getArea());
console.log(circle1.getPerimetr());
console.log(circle2.getArea());
console.log(circle2.getPerimetr());

// 8

function showTextButton() {
    let user = prompt('Введите номер месяца');

    if ((user === 12) || (user === 1) || (user === 2)) {
        alert('Зима');
    } else if ((user === 3) || (user === 4) || (user === 5)) {
        alert('Весна');
    } else if ((user === 6) || (user === 7) || (user === 8)) {
        alert('Лето');  
    } else if ((user === 9) || (user === 10) || (user === 11)) {
        alert('Осень'); 
    } else {
        alert('Такого месяца не существует');
    }
}