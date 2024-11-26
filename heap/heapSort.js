function heapify(arr, length, index){
    let largest  = index
    let leftChildIndex = 2 * index + 1
    let rightChildIndex = 2 * index + 2
    if(leftChildIndex < length && arr[largest] < arr[leftChildIndex]){
        largest = leftChildIndex
    }
    if(rightChildIndex < length && arr[largest] < arr[rightChildIndex]){
        largest = rightChildIndex
    }
    if(largest != index){
        [arr[largest], arr[index]] = [arr[index], arr[largest]]
        heapify(arr, length, largest)
    }
}
function sort(arr){
    let length = arr.length
    for(let i = Math.floor(length / 2) - 1; i >= 0; i--){
        heapify(arr, length, i)
    }

    for(let i = length - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }
}
let arr = [9, 4, 3, 8, 10, 2, 5]
sort(arr)
console.log(arr)
