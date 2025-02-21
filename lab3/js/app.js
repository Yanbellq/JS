// Task - 1
console.log("Task - 1\n\n");

let n = 1;
while (n < 50)
{
    n++;
}

console.log(n);

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
