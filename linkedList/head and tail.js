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
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
          this.tail.next = newNode
          this.tail = newNode
        }
    }
    prepand(value){
        let newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode
    }
    printlist(value){
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
list.append(4)
list.append(5)
list.prepand(0)
list.printlist()
