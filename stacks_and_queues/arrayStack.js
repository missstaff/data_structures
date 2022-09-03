class Stack{
  constructor(){
    this.data = new Array();
  }

  peek(){
    return this.data[this.data.length -1];
  }

  push(value){
    this.data.push(value);
    return this;
  }

  pop(){
    this.data.pop();
    return this;
  }
}


