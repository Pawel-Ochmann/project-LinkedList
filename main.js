class LinkedList {
  constructor(head) {
    this.head = head;
  }

  //   append(value) {
  //     const node = new Node(value);
  //     if (!this.nextNode) {
  //       this.head.nextNode = node;
  //     } else console.log(this.head.nextNode);
  //   }

  // prepend(value) {

  // }

  // size() {

  // }

  // head() {

  // }

  // tail() {

  // }

  // at(index) {

  // }

  // pop() {

  // }

  // contains(value) {

  // }

  // find(value) {

  // }

  // toString() {

  // }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const test = new Node('test');

const testList = new LinkedList(test);
console.log(testList);
