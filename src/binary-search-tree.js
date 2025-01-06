const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  getNodeLocation(data) {
    if (this.#root === null) return null;

    let parentNode = this.#root;
    let foundNode = this.#root;
    let position;

    while (foundNode !== null) {
      if (data < foundNode.data) {
        position = "left";
      } else if (data > foundNode.data) {
        position = "right";
      } else {
        break;
      }

      parentNode = foundNode;
      foundNode = foundNode[position];
    }

    return { parentNode, foundNode, position };
  }

  find(data) {
    const nodeLocation = this.getNodeLocation(data);

    if (nodeLocation === null || nodeLocation.foundNode === null) return null;

    return nodeLocation.foundNode;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
