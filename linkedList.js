class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  //head--> null
  //head --> [element, next] --> [element, next] --> null
  add(element) {
    let newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length += 1;
  }

  remove(element) {
    if (this.size === 0) {
      return undefined;
    }
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      //at this point, currentNode points to the correct element
      previousNode.next = currentNode.next;
    }
    this.length -= 1;
  }

  //isEmpty()

  //indexOf()

  //elementAt()

  //addAt()

  //removeAt()

  //log()
  log() {
    let currentNode = this.head;
    let str = "";
    if (this.head === null) {
      console.log("Empty");
    } else {
      str += `${currentNode.element} --> `;
      while (currentNode.next) {
        currentNode = currentNode.next;
        str += `${currentNode.element} --> `;
      }
    }
    console.log(str + "null");
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//test
const list = new LinkedList();
list.add("first");
list.add("second");
list.add("third");
list.add("fourth");
list.add("fifth");
list.remove("second");
list.add("1");
list.add("12");
list.add("13");
list.add("14");
list.add("15");
list.remove("1");
list.remove("12");
list.log();
