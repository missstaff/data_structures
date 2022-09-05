import Node from "./node.js";

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(value){
    const item = new Node(value);
    if(this.top === null){
      this.top = item;
      this.bottom = item;

    }else{
      const temp = this.top;
      this.top = item;
      this.top.next = temp;
    }

    this.length++;
    return this;
  }

  pop(){

    if(!this.top) return null;
    if(this.top === this.bottom) this.bottom = null;

    const cur = this.top;
    const next = cur.next;
    this.top = next;
    this.length--;
    
    return cur;
  }
}


