let arr = [1,2,3,4,5,1,2,3,5,9]
for(let i=0; i<arr.length; i++){
    let flag = 0
    for(let j=0; j<arr.length; j++){
        if(i!=j&&arr[i]===arr[j]){
            flag++
            break
        }
    }
     if(flag==0){
        console.log(arr[i])
        break
    }
}