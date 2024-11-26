function findSecondLargest(arr) {

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    return second === -Infinity ? null : second;
}


const arr = [10, 20, 4, 45, 99];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); 
