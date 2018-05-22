class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const nodeToAdd = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = nodeToAdd;
    this.length++;

    return this.log("added", nodeToAdd);
  }

  get(num) {
    // implement
    if (num < 0 || num > this.length) {
      return "Doesn't exist!";
    }

    let index = 1;
    let current = this.head;
    while (current.next && index < num) {
      current = current.next;
      index++;
    }
    return this.log("got", current);
  }

  remove(num) {
    // implement
    let current = this.head;
    if (num === 1 && current) {
      this.head = this.head.next;
      this.length--;
      return this.log("removed", current);
    }
    if (num < 0 || num > this.length || !current) {
      return null;
    } else {
      let previous;
      let index = 1;
      while (current.next && index < num) {
        previous = current;
        current = current.next;
        index++;
      }
      let toDelete = previous.next;
      previous.next = current.next;
      this.length--;
      return this.log("removed", toDelete);
    }
  }

  log(action, Node) {
    if (Node) {
      return console.log(action + " " + Node.data);
    }
    console.log(
      "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    );
    let currentNode = this.head;
    let str = "";
    if (this.head === null) {
      console.log("Empty");
    } else {
      str += `${currentNode.data} --> `;
      while (currentNode.next) {
        currentNode = currentNode.next;
        str += `${currentNode.data} --> `;
      }
    }
    console.log(str + "null");
    console.log("Length: " + this.length);
    console.log(
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
    );
  }
}

const List = new LinkedList();
List.add("Luke");
List.add("Leia");
List.add("r2-d2");
List.add("darth vader");
List.add("yoda");
List.add("tatooine");
List.log();
List.get(4);
List.remove(3);
List.remove(3);
List.remove(1);
List.log();
