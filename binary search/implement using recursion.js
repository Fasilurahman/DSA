function binary(arr,target,low,high){
    if(low > high){
        return -1
    }
    let mid = Math.floor((low+high)/2)
    if(arr[mid]===target){
        return mid
    }
    if(arr[mid]>target){
        return binary(arr,target, low , mid-1)
    }else{
        return binary(arr,target, mid+1, high)
    }
}

let arr = [1,2,3,4,5]
let target = 1
let index = binary(arr,target,0,arr.length-1)
console.log(index)