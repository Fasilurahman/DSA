class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class linkedList{
    constructor(){
        this.head = null
    }
    prepand(value){
        let newNode = new Node(value)
        if(this.head){
            this.head.prev = newNode 
        }
        
        this.head = newNode
    }
    append(value){
        let newNode = new Node(value)
        let current = this.head
        while(current.next){
            current = current.next
        }
        newNode.prev = current
        current.next = newNode
    }
    print(value){
        let current = this.head
        while(current){
            console.log(current.prev?current.prev.value:null,current.value)
            current = current.next
        }
    }
}
let list = new linkedList();
list.prepand(0)
list.append(1)
list.append(2)
list.append(3)
list.print()