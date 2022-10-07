class Node {
  constructor(data, addressofnext = null) {
    this.data = data;
    this.addressofnext = addressofnext;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

const firstNode = new Node('shubham addres');
const secondNode = new Node('Nikhil');

firstNode.addressofnext = secondNode;

const ll = new LinkedList(firstNode);

console.log(ll);
// Adding a second item
