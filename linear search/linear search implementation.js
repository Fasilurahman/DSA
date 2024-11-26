function linear(nums,target){
    for(let i=0; i<nums.length; i++){
        if(target===nums[i]){
            return i
        }
    }
    return -1
}
console.log(linear([1,2,3,4,5],5))