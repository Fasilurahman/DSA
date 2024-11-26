function binary(arr,target,replace){
    let low= 0
    let high = arr.length-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]===target){
            arr[mid]=replace
            return arr
        }
        if(arr[mid]>target){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return-1
}
const arr = [1,2,3,4,5]
let target = 3
let replace = 0
let index = binary(arr,target,replace)
console.log(index)