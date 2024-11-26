function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }return arr
}
console.log(selectionSort([1,4,5,3,6,9,8,7]))