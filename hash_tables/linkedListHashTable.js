import List from "./list.js";
import Node from "./node.js";
/*WIP*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.length = 0;
  };


  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  };


  set(key, value) {

    const address = this._hash(key);

    let bucket = this.data[address];
    const node = new Node(key, value);

    if (!bucket){

      bucket = new List(node);
      this.data[address] = bucket;
    
      bucket.length++;
      this.length++;

      return this.data;

    }else{
      let current = bucket.head;

      if (!current.next) {
        current.next = node;
      }else{

        while (current.next){
          current = current.next;
        }
        current = node;
      }
      
      bucket.length++;
      this.length++;


    }

    return this.data;
  };


  // get(key){
  //   let address = this._hash(key);
  //   const currentBucket = this.data[address];

  //   if(!currentBucket) return undefined;

  //   for(let i = 0; i < currentBucket.length; i++){
  //     if(currentBucket[i][0] === key) return currentBucket[i][1];
  //   }
  // };


  // remove(key){
  //   let address = this._hash(key);
  //   const currentBucket = this.data[address];

  //   if(!currentBucket) return undefined;

  //   for(let i = 0; i < currentBucket.length; i++){
  //     if(currentBucket[i][0] === key) {
  //       const item = this.data[address][i];
  //       delete this.data[address][i];
  //       return item;
  //     }
  //   }
  // };


  // keys(){
  //   if(!this.data.length) return undefined;

  //   const keysArray = [];
  //   for(let i = 0; i < this.data.length; i++){
  //     if(this.data[i]){
  //       keysArray.push(this.data[i][0][0]);
  //     }
  //   }
  //   return keysArray;
  // };


  // values(){
  //   if(!this.data.length) return undefined;

  //   const valuesArray = [];
  //   for(let i = 0; i < this.data.length; i++){
  //     if(this.data[i]){
  //       valuesArray.push(this.data[i][0][1]);
  //     }
  //   }
  //   return valuesArray;
  // };

}

const myHashTable = new HashTable(10);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 50);
myHashTable.set('peaches', 512);
myHashTable.set('bananas', 10);
myHashTable.set('apricots', 10);
myHashTable.set('dragon fruit', 10)
myHashTable.set('lemon', 10)
myHashTable.set('lime', 10)
myHashTable.set('watermelon', 10)
// const grapes = myHashTable.get('grapes');


// const keys = myHashTable.keys();
// const values = myHashTable.values();

// myHashTable.remove("bananas");
console.log(myHashTable.data);