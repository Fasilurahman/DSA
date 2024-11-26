function binary(arr,target){
    let low = 0
    let high = arr.length - 1
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        
        if(arr[mid]===target){
            return mid
        }else if(arr[mid] > target){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return 1
}
let array = [1,2,3,4,5,6,7,8,9,10]
let target = 7
let index = binary(array,target)
console.log(index)