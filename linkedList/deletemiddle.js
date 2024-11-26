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
  findMiddle(){
      let fast = this.head
      let slow = this.head
      let prev = null
      while(fast !== null && fast.next !== null){
          prev = slow
          slow = slow.next
          fast = fast.next.next
      }
      prev.next = slow.next
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
list.findMiddle()
list.printlist()
