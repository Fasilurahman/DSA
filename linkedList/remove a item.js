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
            return
        }
        if(index===0){
            this.prepand(value)
        }else{
            let newNode = new Node (value)
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
            this.size++
        }
    }
    removenode(value) {
    if (!this.head) {   // Step 1
        console.log("List is empty");
        return;
    }

    if (this.head.value === value) {   // Step 2
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {   // Step 3
        previous = current;
        current = current.next;
    }
    previous.next = current.next;   
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
list.prepand(0)
list.printlist()
list.removenode(2)
list.printlist()


