import Node from "./node.js";

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    //checks for root
    if (this.root === null) {
      return this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {

    if (!this.root) return null;
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {

    if (!this.root) return null;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        //things happen here
      } else if (currentNode.value === value) {
        // no right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //right child with no left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left
          }

          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();

      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  
      return this.breadthFirstSearchR(queue, list)
  }

  DFSInorder(){
    return traverseInorder(this.root, []);
  }

  DFSPreorder(){
    return traversePreorder(this.root, []);
  }

  DFSPostorder(){
    return traversePostorder(this.root, []);
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


/*
      9
  4       20
1  6   15  170
depthFirstSearch search types
InOrder - [1, 4, 6, 9, 15, 20, 170]
PreOrder - [9, 4, 1, 6, 20, 15, 170]
PostOrder - [1, 6, 4, 15, 170, 20, 9] 
*/

function traverseInorder(node, list){

  if(node.left){
    traverseInorder(node.left, list);
  }
  list.push(node.value);

  if(node.right){
    traverseInorder(node.right, list)
  }
  
  return list;
};

function traversePreorder(node, list){

  list.push(node.value);

  if(node.left){
    traversePreorder(node.left, list);
  }

  if(node.right){
    traversePreorder(node.right, list)
  }

  return list;
};

function traversePostorder(node, list){
  
  
  if(node.left){
    traversePostorder(node.left, list);
  }
  
  if(node.right){
    traversePostorder(node.right, list)
  }

  list.push(node.value);

  return list;
};


const tree = new Tree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// tree.breadthFirstSearch();
// tree.breadthFirstSearchR([tree.root], []);

// tree.DFSInorder();
// tree.DFSPreorder();
tree.DFSPostorder();