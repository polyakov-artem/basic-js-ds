const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  top = null;

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.top === null) {
      this.top = newNode;
    } else {
      let lastNode = this.top;

      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }

      lastNode.next = newNode;
    }
  }

  dequeue() {
    if (this.top === null) {
      return this.top;
    }

    const { value } = this.top;
    this.top = this.top.next;
    return value;
  }
}

module.exports = {
  Queue,
};
