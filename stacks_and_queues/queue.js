import Node from "./node.js";

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.first;
  }

  enqueue(value){
    const node = new Node(value);
    if(this.length === 0){
      this.first = node;
      this.last = node;
    }


    this.last.next = node;
    this.last = node;

    this.length++;
    return this;
  }

  dequeue(){
    if(!this.first){
      return null;
    }

    if(this.first === this.last) this.last = null;

    const temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp;
  }

}
