let array;

const task1 = (array) => { 
    console.log(array.toString().concat(' - Початковий масив'));

    array.pop()
    console.log(array.toString().concat(' - Без останнього елемента'));

    array.unshift("ананас");
    console.log(array.toString().concat(' - З новим першим елементом'));

    array.sort().reverse();
    console.log(array.toString().concat(' - У зворотньому алфавітному порядку'));

    console.log(array.indexOf('яблуко').toString().concat(' - Індекс яблука'));
}

console.log('Task - 1\n\n');
task1(array = ["яблуко", "банан", "апельсин", "груша", "виноград"]);

// --------------------------------------------------------------------------------------------

const task2 = (array) => { 
    console.log(array.toString().concat(' - Початковий масив'));

    let longest = array.reduce((a, b) => a.length > b.length ? a : b);
    let shortest = array.reduce((a, b) => a.length < b.length ? a : b);
    console.log(longest.concat(' - Найдовший елемент'));
    console.log(shortest.concat(' - Найкоротший елемент'));

    let array1 = array.filter(item => item.includes("синій"));
    console.log(array1.toString().concat(' - Тільки з елементами, що містять "синій"'));

    let joinedString = array.join(', ');
    console.log(joinedString.concat(' - Об\'єднаний рядок'));
}

console.log('\nTask - 2\n\n');
task2(array = ["червоний", "синій", "зелений", "жовтий", "фіолетовий", "блакитний", "оранжевий", "рожевий", "білий", "синій"]);
