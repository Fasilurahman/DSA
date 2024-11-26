function uniqueElements(arr1, arr2) {

    const combined = [...arr1, ...arr2];
    const unique = new Set(combined);

    return Array.from(unique);
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = uniqueElements(array1, array2);
console.log(result); 
