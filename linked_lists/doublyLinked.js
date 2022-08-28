import Node from "./node.js";

class doublyLinked{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      previous: null,
    }

    this.tail = this.head;
    this.length = 1;
  };

  append(value) {

    const newNode = new Node(value);
    
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  };

  prepend(value) {

    const newNode = new Node(value);
    
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;

    return this;
  };

  insert(index, value){

    if(typeof index !== "number" && index < 0) return;

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index > this.length) {
      this.append(value);
      return this.printList();
    }

    
    let newNode = new Node(value);

    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;

    
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;

    return this;
  };

  traverseToIndex(index){

    if(typeof index !== "number" && index < 0) return;

      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
  };

  printList(){

    const arr = [];
    let curNode = this.head;

    while(curNode !== null){
      arr.push(curNode.value);
      curNode = curNode.next;
    }
    return console.log(arr);
  };

}


const myDoublyLinked = new doublyLinked(5);
myDoublyLinked.append(8);
// myDoublyLinked.append(9);
// myDoublyLinked.prepend(1);
// myDoublyLinked.insert(1, 3);
// myDoublyLinked.remove(2);
myDoublyLinked.reverse();
myDoublyLinked.printList();