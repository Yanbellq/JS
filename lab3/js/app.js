// Task - 1
console.log("Task - 1\n\n");

let n = 1;
while (n < 50)
{
    n++;
}

console.log(`Sum of the numbers: ${n}`);

// Task - 2
console.log("\n\nTask - 2\n\n");
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let num = document.getElementById('num').value;

    const faktorial = (num) => {
        if (num < 0) {
            return -1;
        } 
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }

        return result;
    }

    if (!isNaN(num)) {
        console.log(`Факторіал числа ${num} = ${faktorial(num)}`);
    } else {
        console.log("Будь ласка, введіть коректне число.");
    }


    document.getElementById('num').value = '';  
});

// Task - 3
const showMonth = () => {
    console.log("\n\nTask - 3\n\n");
    
    let num = parseInt(prompt("Введіть число (1 - 12):"));

    switch (num)
    {
        case 1:
        {
            console.log("Month: January");
            break;
        }
        case 2:
        {
            console.log("Month: February");
            break;
        }
        case 3:
        {
            console.log("Month: March");
            break;
        }
        case 4:
        {
            console.log("Month: April");
            break;
        }
        case 5:
        {
            console.log("Month: May");
            break;
        }
        case 6:
        {
            console.log("Month: June");
            break;
        }
        case 7:
        {
            console.log("Month: July");
            break;
        }
        case 8:
        {
            console.log("Month: August");
            break;
        }
        case 9:
        {
            console.log("Month: September");
            break;
        }
        case 10:
        {
            console.log("Month: October");
            break;
        }
        case 11:
        {
            console.log("Month: November");
            break;
        }
        case 12:
        {
            console.log("Month: December");
            break;
        }
        default:
        {
            console.log("Enter the correct number");
            break;
        }
    }
}

// Task - 4
console.log("\n\nTask - 4\n\n");

const sum = (arr) => {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0)
}

let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(`Sum of the array: ${sum(array)}`);
