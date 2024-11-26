function reverse(s){
    const splitS = s.split(' ');
    const stack = []
    
    for(let i of splitS){
        stack.push(i)
    }
    let finalS = ''
    while(stack.length){
        let current = stack.pop()
        
        if(current){
        finalS +=' '+current
        }
    }
    return finalS
}
console.log(reverse('The sky is blue'))