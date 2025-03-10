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

// --------------------------------------------------------------------------------------------

const task3 = () => {
    let employees = [
        { name: "Олександр", age: 30, position: "розробник" },
        { name: "Марія", age: 25, position: "дизайнер" },
        { name: "Іван", age: 35, position: "тестувальник" },
        { name: "Олена", age: 28, position: "розробник" },
        { name: "Петро", age: 40, position: "менеджер" }
    ];

    console.log(employees.map(e => e.name).toString().concat(' - Початковий масив'));

    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log(employees.map(e => e.name).toString().concat(' - Відсортований масив'));

    let developers = employees.filter(employee => employee.position === "розробник");
    console.log(developers.map(e => e.name).toString().concat(' - Розробники'));

    employees = employees.filter(employee => employee.age < 40);
    console.log(employees.map(e => e.name).toString().concat(' - Без працівників старше 40 років'));

    employees.push({ name: "Андрій", age: 22, position: "стажер" });
    console.log(employees.map(e => e.name).toString().concat(' - Оновлений масив'));
}

console.log('\nTask - 3\n\n');
task3();

// --------------------------------------------------------------------------------------------

const task4 = () => { 
    let students = [
        { name: "Олександр", age: 24, course: 6 },
        { name: "Максим", age: 19, course: 2 },
        { name: "Ольга", age: 17, course: 1 },
        { name: "Владислав", age: 20, course: 3 },
        { name: "Данило", age: 19, course: 2 }
    ]
}

console.log('\nTask - 4\n\n');
task4();