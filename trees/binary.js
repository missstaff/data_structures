import Node from "./node.js";

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value);

    if(!this.root){
      this.root = newNode;
    }
    let currentNode = this.root;
    let nextLeft = currentNode.left;
    let nextRight = currentNode.right;
    
    console.log("A")
    if(newNode.value > currentNode.value){
      nextRight = newNode;
    }else if(newNode.value < currentNode.value){
      console.log("C");
    }
  }
  lookup(value){}
  //remove
}

const binaySearchTree = new BinarySearchTree();
binaySearchTree.insert(3);
binaySearchTree.insert(4);
console.log(binaySearchTree)