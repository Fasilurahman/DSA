let sparseArray = [];
sparseArray[0] = 'apple';
sparseArray[2] = 'banana';

sparseArray.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});
// Output:
// Index 0: apple
// Index 1: undefined
// Index 2: banana
