function qS(arr){
    if(arr.length <= 0){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    
    for(let i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...qS(left),pivot,...qS(right)]
}
console.log(qS([5,7,6,3,1,9,8,2,4]))