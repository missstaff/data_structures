import Node from "./node.js";


class LinkedList {
  constructor(value) {

    this.head = {
      value: value,
      next: null,
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {

    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {

    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {

    if (typeof index !== "number" && index < 0) return;

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index > this.length) {
      this.append(value);
      return this.printList();
    }


    let newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;


    // let count = 0;
    // let pre = this.head; 
    // let cur = this.head.next;


    // while(pre !== null){
    //   if (count === index){

    //     newNode.next = {
    //       value:pre.value,
    //       next: pre.next,
    //     };

    //     cur.next.next = newNode.next;
    //     cur.next.value = newNode.value;


    //     this.length++;
    //     return this;
    //   }

    //     pre = pre.next;
    //     count++;
    //   }
  }

  remove(index) {

    if (typeof index !== "number" && index < 0) return;

    const prevItem = this.traverseToIndex(index - 1);
    const curItem = prevItem.next;
    const next = curItem.next;

    prevItem.next = {
      value: next.value,
      next: next.next
    }

    this.length--;
    return this;
  }

  reverse() {
    if(!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    
    this.head.next = null;
    this.head = first;
    return this;

  }

  traverseToIndex(index) {

    if (typeof index !== "number" && index < 0) return;

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {

    const arr = [];
    let curNode = this.head;

    while (curNode !== null) {
      arr.push(curNode.value);
      curNode = curNode.next;
    }
    return console.log(arr);;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(3);
myLinkedList.reverse();
myLinkedList.printList()
// console.log(myLinkedList)