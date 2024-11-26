// Reverse a string using recursion
function reverse(str){
    if(str == ""){
        return ""
    }
    return reverse(str.slice(1))+str[0];
}
console.log(reverse("Malayalam"))

//reverse a number using recursion
function reverseNum(num){
    if(num == 0){
        return 0
    }
    return num%10 + reverseNum(Math.floor(num/10))
}
console.log(reverseNum(12345))