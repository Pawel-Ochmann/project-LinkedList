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
      actualIndex++;
      if (actualIndex === index) return node;
      else if (!node.nextNode) return `Node at index ${index} does not exist`;
      else return findIndex(node.nextNode);
    }
    return findIndex(this.head);
  }

  pop() {
    let lastNode = this.head;
    if (!this.head.nextNode) this.head = null;
    function deleteLastNode(node) {
      if (!node.nextNode.nextNode) {
        lastNode = node.nextNode;
        node.nextNode = null;
      } else deleteLastNode(node.nextNode);
    }
    deleteLastNode(this.head);
    return lastNode;
  }

  contains(value) {
    function checkValue(node) {
      if (node.value === value) return true;
      else if (!node.nextNode) return false;
      else return checkValue(node.nextNode);
    }
    return checkValue(this.head);
  }

  find(value) {
    let actualIndex = -1;
    function findIndex(node) {
      actualIndex++;
      if (node.value === value) return actualIndex;
      else if (!node.nextNode) return null;
      else return findIndex(node.nextNode);
    }
    return findIndex(this.head);
  }

  toString() {
    let string = '';
    function getString(node) {
      if (!node.nextNode) string += `( ${node.value} ) -> ` + node.nextNode;
      else {
        string += `( ${node.value} ) -> `;
        getString(node.nextNode);
      }
    }
    getString(this.head);
    return string;
  }
  insertAt(value, index) {
    const nodeNew = new Node(value);
    let actualIndex = 0;
    function putAtIndex(node) {
      actualIndex++;
      if (actualIndex === index) {
        nodeNew.nextNode = node.nextNode;
        node.nextNode = nodeNew;
      } else if (!node.nextNode)
        console.log('There is no such index in this list');
      else return putAtIndex(node.nextNode);
    }
    putAtIndex(this.head);
  }

  removeAt(index) {
    let actualIndex = -1;
    function removeAtIndex(node) {
      actualIndex++;
      if (actualIndex === index - 1) {
        node.nextNode = node.nextNode.nextNode;
      } else if (!node.nextNode)
        console.log('There is no such index in this list');
      else return removeAtIndex(node.nextNode);
    }
    removeAtIndex(this.head);
  }
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
console.log(testList.toString());
testList.insertAt('this is insert test', 3);
console.log(testList.toString());
testList.removeAt(3);
console.log(testList.toString());
testList.removeAt(15);
