// 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort(function compareAge(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
 });
 
 console.log(people.sort());

//  2

function isPositive(num) {
    if (num > 0) {
        return num;
    }
}
function isMale(who) {
    if (who.gender == 'male') {
        return who;
    }
}
function filter(arr, ruleFunction) {
    for (let i=0; i<arr.length; i++) {
        return arr.filter(ruleFunction);
    }
}
    
console.log(filter([3, -4, 1, 9], isPositive)); 
    
const peoples = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(peoples, isMale));

// 3

const timer = (deadline) => {
    const interval = setInterval(() => {
        let currentDate = new Date();
    console.log(currentDate);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
    console.log('30 секунд прошло');
    }, deadline * 1000);
}
timer(30);

// 4

function delayForSeconds(callback) {
    setTimeout(() => {
        console.log('Привет, Глеб!');
    }, 1000);
  callback();
}

delayForSeconds(function () {
  console.log('Привет, Глеб!');
})

// 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
		if(cb) { 	
        cb(); 
    }
}, 1000);
}

function sayHi(names) {
    console.log(`Привет, ${names}!`);
}
setTimeout(() => {
    sayHi('Глеб');
}, 2000);
delayForSecond();