const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(linkedList, valueToDelete) {
  let resultList = linkedList;

  let prevNode = null;
  let currentNode = resultList;
  let nextNode = currentNode.next;

  while (currentNode !== null) {
    if (currentNode.value === valueToDelete) {
      if (prevNode === null) {
        currentNode = currentNode.next;
        resultList = currentNode;
        nextNode = currentNode.next;
      } else if (nextNode === null) {
        currentNode = currentNode.next;
        prevNode.next = null;
      } else {
        prevNode.next = currentNode.next;
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
      nextNode = currentNode?.next || null;
    }
  }

  return resultList;
}

module.exports = {
  removeKFromList,
};
