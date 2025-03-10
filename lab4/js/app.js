// Task - 1

console.log('Task - 1\n\n');
let fruits = ["яблуко", "банан", "апельсин", "груша", "виноград"];

console.log(fruits.toString().concat(' - Початковий масив'));

fruits.pop()
console.log(fruits.toString().concat(' - Без останнього елемента'));

fruits.unshift("ананас");
console.log(fruits.toString().concat(' - З новим першим елементом'));

fruits.sort().reverse();
console.log(fruits.toString().concat(' - У зворотньому алфавітному порядку'));

console.log(fruits.indexOf('яблуко').toString().concat(' - Індекс яблука'));


// Task - 2
console.log('\nTask - 2\n\n');
