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
        let newNode = new Node (value)
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
    prepand(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    insert(value,index){
        if(index < 0 || index > this.size){
            console.log("invalid index")
            return
        }
        if(index===0){
            this.prepand(value)
        }else{
            let newNode = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
            this.size++
        }
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
list.insert(20,3)
list.insert(20,0)
list.printlist()




