class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    const nodeNew = new Node(value);
    function checkNode(node) {
      if (!node.nextNode) {
        node.nextNode = nodeNew;
      } else checkNode(node.nextNode);
    }
    checkNode(this.head);
  }
  prepend(value) {
    const nodeNew = new Node(value, this.head);
    this.head = nodeNew;
  }

  size() {
    let counter = 1;
    function count(node) {
      if (!node.nextNode) return;
      else {
        counter++;
        count(node.nextNode);
      }
    }
    count(this.head.nextNode);
    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    function checkTail(node) {
      if (!node.nextNode) {
        return node;
      } else return checkTail(node.nextNode);
    }
    return checkTail(this.head);
  }

  at(index) {
    let actualIndex = -1;
    function findIndex(node) {
      actualIndex++
      if (actualIndex === index) return node;
      else if (!node.nextNode) return `Node at index ${index} does not exist`;
      else return findIndex(node.nextNode);
    }
    return findIndex(this.head);
  }

  pop() {
    
  }

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
testList.append('test1');
testList.append('test2');
testList.prepend('test3');
console.log(testList.at(2));
console.log(testList.at(5));
