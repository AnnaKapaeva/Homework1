// // 1
// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     if (numbs [i] == 10) break;
//     console.log(numbs [i]);
// }
    
// // 2
// const numbers = [1, 5, 4, 10, 0, 3];
// console.log(numbers.indexOf(4));

// // 3
// let num = [1, 3, 5, 10, 20];
// num = num.join(' ');
// console.log(num);

// // 4

// let arr = [];
// for (let i=0; i<1; i++) {
//   arr[i]=[];
//   for (let j=0; j<3; j++) {
//     arr[i].push(j+1);
//   }  
// }
// console.log(arr);

// // 5
// let numVar = [1, 1, 1];
// let newVar = numVar.push(2, 2, 2);
// console.log(numVar);

// // 6
// let array = [9, 8, 7, 'a', 6, 5];
// array = array.sort();
// console.log(array.pop('a'));
// console.log(array);

// // 7
// const value = [9, 8, 7, 6, 5];
// const guess = +prompt('Угадай число?');
// for (let i=0; i<value.length; i++) {
//     if (value[i] === guess)  {
//         alert('Угадал');
//     }
// }
//     alert('Не угадал');

// // // 8
// let line = 'abcdef';
// console.log(line.split('').reverse().join(''));

// // 9
// const arrs = [[1, 2, 3,],[4, 5, 6]];
// console.log(arrs.flat());

 
// // 10
// const selective = [7, 9, 5, 3];
// for (let i = 0; i < selective.length - 1; i++) {
//     let sum = selective[i] + selective[i + 1];
//     console.log(sum);
// }

// // 11
// const wholeNumbers = [2, 4,];
// let result = wholeNumbers.map(item => (item*item));
// console.log(result);

// // 12
// function getLenghtWords(arr) {
//     return arr.map(el => {
//         console.log(el.length);
//     })
// }
// getLenghtWords(['слово', '', 'слог','длинное предложение', 'буква']);

// // 13
// function filterPositive(array) {
//     return array.filter(item => (item < 0));
// }
// filterPositive([-1, 0, 5, -10, 56]);
// filterPositive([-25, 25, 0, -1000, -2]);
