// 1
let i = 0;
while (i<2) {
    console.log('Привет');
    i++;
}

// 2
let a = 1;
while (a<=5) {
    console.log(a);
    a++
}

// 3
let b = 7;
while (b<=22) {
    console.log(b);
    b++
}

// 4  что-то в этом коде не так
const obj = {
    "Коля" : '200' ,
    "Вася" : '300' ,
    "Петя" : '400' ,
};
for (let money in obj) {
    console.log('{money} зарплата {obj[money]}');
}


// 5
let n=1000;
let num=0;
while(n<1000) {
    num = n / 2;
    num++;
    if (num <= 50){
       continue;
    }
    num /= n;
}
console.log(num);

// 6
for (let dayNumber = 1 ; dayNumber <= 31 ; dayNumber++) {
    if (dayNumber % 7 == 0) {
        console.log("Сегодня пятница. Необходимо подготовить отчет.");
        continue;
    }
}
    

