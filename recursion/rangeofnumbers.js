// Range of numbers using recursion
function range(start,end){
    if(end<start){
        return []
    }
    const number = range(start,end-1) 
    number.push(end)
    return number
}
console.log(range(0,10))