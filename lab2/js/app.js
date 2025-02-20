// console.log("Hello World");

// TASK - 1

// part 1
function getMinMax(array) {
    if (array.length === 0) {
        return { min: null, max: null };
    }

    let min = array[0];
    let max = array[0];

    array.forEach((element) => {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    });

    return { min, max };
}

let array = [1, 2, 3, 4, 5];
let result = getMinMax(array);
console.log(`Min: ${result.min}, Max: ${result.max}`);


let minType = typeof result.min;
let maxType = typeof result.max;

console.log(`Type of min: ${minType}`);
console.log(`Type of max: ${maxType}`);


// part 2
function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let obj1 = { min: 1, max: 5 };
let obj2 = { min: 1, max: 5 };
let obj3 = { min: 2, max: 4 };

console.log(compareObjects(obj1, obj2)); 
console.log(compareObjects(obj1, obj3));
