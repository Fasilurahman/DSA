// //Linked list add element at the first

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
    }

    append(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    prepend(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
     printlist(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }

    }
}
const list = new linkedList()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.printlist()



