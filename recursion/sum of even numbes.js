function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const first = arr[0];
    
    if (first % 2 === 0) {
        return first + sum(arr.slice(1));
    } else {

        return sum(arr.slice(1));
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sum1 = sum(numbers);
console.log(`Sum of even numbers: ${sum1}`);
