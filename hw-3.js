// 1
let password = 'пароль';
let leadpassword = prompt ('Введите пароль');
if (leadpassword === password) {
    alert('Пароль веден вверно');
} else {
    alert('Пароль введен неправильно');
}

// 2
let c = prompt ('Введите число');
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 3 не поняла как сделать правильно
let d = 101;
let e = 101;
let number = prompt ('число');
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}
 // 4
 let a = '2';
 let b = '3';
 alert( Number(a) + Number(b));
 alert( +a + +b);

 // 5 что-то в коде не правильно, не пойму что?
 let month = prompt ('Введите номер месяца');
 switch (month) {
    case 1:
    case 2:
    case 12:
        console.log('Зима')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето')
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень')
        break;
    default: console.log('Такого месяца не существует')
        break;
 }